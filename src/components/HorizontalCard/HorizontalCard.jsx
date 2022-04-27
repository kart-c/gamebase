import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth, useLikes, usePlaylists, useWatchLater } from '../../context';
import { deleteLike, deleteWatchLater, removeFromPlaylist } from '../../utils';
import styles from './HorizontalCard.module.css';

const HorizontalCard = ({ videoThumbnail, title, channelName, time, _id, playlist_id }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [btnLoading, setBtnLoading] = useState({ likes: false, watchLater: false });
	const {
		authState: { token },
	} = useAuth();
	const { playlistsDispatch } = usePlaylists();
	const { likesDispatch } = useLikes();
	const { watchLaterDispatch } = useWatchLater();
	let { pathname } = useLocation();
	pathname = pathname.slice(1);

	const optionsHandler = () => setIsVisible((prev) => !prev);

	const getName = (pathname) => {
		switch (pathname) {
			case 'liked':
				return 'Remove from likes';

			case 'watchlater':
				return 'Remove from watch later';

			default:
				return 'Remove from playlist';
		}
	};

	const removeHandler = (_id) => {
		switch (pathname) {
			case 'liked':
				deleteLike({ _id, token, likesDispatch, setBtnLoading, setIsVisible });
				break;

			case 'watchlater':
				deleteWatchLater({ _id, token, watchLaterDispatch, setBtnLoading, setIsVisible });
				break;

			default:
				removeFromPlaylist({ videoId: _id, token, playlistsDispatch, playlist_id });
		}
	};

	return (
		<article className={styles.hrCard}>
			{isVisible && (
				<div className={styles.menu}>
					<button onClick={() => removeHandler(_id)} disabled={btnLoading.likes}>
						{pathname === 'liked' && <i className="fa-solid fa-thumbs-down"></i>}
						{getName(pathname)}
					</button>
				</div>
			)}
			<div className={styles.imgContainer}>
				<img src={videoThumbnail} alt={title} className="resp-img" />
				<span>{time}</span>
			</div>
			<div className={styles.content}>
				<h4 className={styles.title}>{title}</h4>
				<h5>{channelName}</h5>
			</div>
			<button className={`btn-btn-primary ${styles.options}`} onClick={optionsHandler}>
				<i className="fa-solid fa-ellipsis-vertical"></i>
			</button>
		</article>
	);
};

export { HorizontalCard };
