import { useState } from 'react';
import { useAuth, useLikes, useWatchLater } from '../../context';
import { likesHandler, deleteLike, addToWatchLater, deleteWatchLater } from '../../utils';
import styles from './VideoCard.module.css';

const VideoCard = ({
	_id,
	channelName,
	channelThumbnail,
	likes,
	time,
	title,
	videoThumbnail,
	viewCount,
	videos,
	playlistHandler,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [btnLoading, setBtnLoading] = useState({
		likes: false,
		watchLater: false,
		playlist: false,
	});
	const {
		authState: { token },
	} = useAuth();
	const { likesState, likesDispatch } = useLikes();
	const {
		watchLaterState: { watchlater },
		watchLaterDispatch,
	} = useWatchLater();

	const optionsHandler = () => setIsVisible((prev) => !prev);

	const videoExists = likesState.likes.some((video) => video._id === _id);

	const likeBtnHandler = (_id) => {
		const video = videos.find((video) => video._id === _id);
		if (videoExists) {
			deleteLike({ _id, token, likesDispatch, setBtnLoading, setIsVisible });
		} else {
			likesHandler({ token, video, likesDispatch, setBtnLoading, setIsVisible });
		}
	};

	const watchlaterExists = watchlater.some((video) => video._id === _id);

	const watchLaterHandler = (_id) => {
		if (watchlaterExists) {
			deleteWatchLater({ _id, token, watchLaterDispatch, setBtnLoading, setIsVisible });
		} else {
			const video = videos.find((video) => video._id === _id);
			addToWatchLater({ token, video, watchLaterDispatch, setBtnLoading, setIsVisible });
		}
	};

	return (
		<article className={styles.card}>
			<div className={styles.cardImg}>
				<img src={videoThumbnail} alt={title} className="resp-img" loading="lazy" />
			</div>
			<span className={styles.time}>{time}</span>
			<div className={styles.content}>
				{isVisible && (
					<div className={`${styles.menu}`}>
						<button
							className="btn btn-primary"
							onClick={() => likeBtnHandler(_id)}
							disabled={btnLoading.likes}
						>
							<i className={videoExists ? 'fa-solid fa-thumbs-down' : 'fa-solid fa-thumbs-up'}></i>
							{videoExists ? 'Remove from Likes' : 'Like Video'}
						</button>
						<button
							className="btn btn-primary"
							onClick={() => watchLaterHandler(_id)}
							disabled={btnLoading.watchLater}
						>
							<i className="fa-solid fa-clock"></i>{' '}
							{watchlaterExists ? 'Remove from Watch Later' : 'Add to Watch Later'}
						</button>
						<button className="btn btn-primary" onClick={() => playlistHandler(_id)}>
							<i className="fa-solid fa-list-ul"></i> Add to playlist
						</button>
					</div>
				)}
				<img src={channelThumbnail} alt={channelName} className="avatar avatar-sm" loading="lazy" />
				<div className={styles.videoDetails}>
					<h4 title={title}>{title}</h4>
					<h5 title={channelName}>{channelName}</h5>
					<div>
						<span>{viewCount} | </span>
						<span>{likes} likes</span>
					</div>
				</div>
				<button className={styles.options} onClick={optionsHandler}>
					<i className="fa-solid fa-ellipsis-vertical"></i>
				</button>
			</div>
		</article>
	);
};

export { VideoCard };
