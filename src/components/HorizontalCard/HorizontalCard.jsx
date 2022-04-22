import React from 'react';
import styles from './HorizontalCard.module.css';

const HorizontalCard = ({ videoThumbnail, title, channelName, time }) => {
	return (
		<article className={styles.hrCard}>
			<div className={styles.imgContainer}>
				<img src={videoThumbnail} alt={title} className="resp-img" />
				<span>{time}</span>
			</div>
			<div className={styles.content}>
				<h4 className={styles.title}>{title}</h4>
				<h5>{channelName}</h5>
			</div>
			<button className={`btn-btn-primary ${styles.options}`}>
				<i className="fa-solid fa-ellipsis-vertical"></i>
			</button>
		</article>
	);
};

export { HorizontalCard };
