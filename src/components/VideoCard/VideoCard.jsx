import { useState } from 'react';
import { useAuth } from '../../context';
import { likesHandler } from '../../utils';
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
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const {
		authState: { token },
	} = useAuth();

	const optionsHandler = () => setIsVisible((prev) => !prev);

	const likeBtnHandler = (_id) => {
		const video = videos.find((video) => video._id === _id);
		likesHandler(token, video);
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
						<button className="btn btn-primary" onClick={() => likeBtnHandler(_id)}>
							<i className="fa-solid fa-thumbs-up"></i> Add to Liked Videos
						</button>
						<button className="btn btn-primary">
							<i className="fa-solid fa-clock"></i> Add to Watch Later
						</button>
						<button className="btn btn-primary">
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
