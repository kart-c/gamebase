import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth, useLikes, useWatchLater } from '../../context';
import { deleteLike, deleteWatchLater } from '../../utils';
import styles from './HorizontalCard.module.css';

const HorizontalCard = ({ videoThumbnail, title, channelName, time, _id }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [btnLoading, setBtnLoading] = useState({ likes: false, watchLater: false });
	const {
		authState: { token },
	} = useAuth();
	const { likesDispatch } = useLikes();
	const { watchLaterDispatch } = useWatchLater();
	let { pathname } = useLocation();
	pathname = pathname.slice(1);

	const optionsHandler = () => setIsVisible((prev) => !prev);

	const removeHandler = (_id) => {
		pathname === 'likes'
			? deleteLike({ _id, token, likesDispatch, setBtnLoading, setIsVisible })
			: deleteWatchLater({ _id, token, watchLaterDispatch, setBtnLoading, setIsVisible });
	};

	return (
		<article className={styles.hrCard}>
			{isVisible && (
				<div className={styles.menu}>
					<button onClick={() => removeHandler(_id)} disabled={btnLoading.likes}>
						{pathname === 'likes' && <i className="fa-solid fa-thumbs-down"></i>}
						{pathname === 'likes' ? 'Remove from likes' : 'Remove from watch later'}
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
