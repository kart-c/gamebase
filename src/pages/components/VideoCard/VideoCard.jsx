import React from 'react';
import styles from './VideoCard.module.css';

const VideoCard = () => {
	return (
		<article className={styles.card}>
			<div className={styles.cardImg}>
				<img src="https://picsum.photos/300" alt="" className="resp-img" />
			</div>
			<div className={styles.content}>
				<img src="https://picsum.photos/300" alt="user avatar" className="avatar avatar-sm" />
				<div className={styles.videoDetails}>
					<h4 title="title">Video Titleaaaaaaaaaaaaaaaaaaaaaaaa</h4>
					<h5 title="title">Channel name</h5>
					<div>
						<span>244 views </span>
						<span> 2 days ago</span>
					</div>
				</div>
				<button className={styles.options}>
					<i className="fa-solid fa-ellipsis-vertical"></i>
				</button>
			</div>
		</article>
	);
};

export { VideoCard };
