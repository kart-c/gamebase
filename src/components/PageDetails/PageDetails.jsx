import React from 'react';
import { empty } from '../../assets';
import styles from './PageDetails.module.css';

const PageDetails = ({ pg, length, video }) => {
	return (
		<section className={styles.pageDetails}>
			<div className={styles.imgContainer}>
				<img src={video ? video.videoThumbnail : empty} alt="liked page" className="resp-img" />
				<button className="btn btn-primary">Play</button>
			</div>
			<h3 className={styles.title}>{pg} Videos</h3>
			<div className={styles.description}>
				<span>{length ? `${length} ${length === 1 ? 'Video' : 'Videos'} ` : 'No Videos'}</span>
				<span>Last Updated on Jan 2, 2022</span>
			</div>
		</section>
	);
};

export { PageDetails };
