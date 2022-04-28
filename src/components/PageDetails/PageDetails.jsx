import React from 'react';
import { empty } from '../../assets';
import styles from './PageDetails.module.css';

const PageDetails = ({ pg, length, video, date }) => {
	const formattedDate = (date) => new Date(date).toDateString();

	const deleteHandler = () => {};

	return (
		<section className={styles.pageDetails}>
			<div className={styles.imgContainer}>
				<img src={video ? video.videoThumbnail : empty} alt="liked page" className="resp-img" />
				{pg !== 'History' && <button className="btn btn-primary">Play</button>}
			</div>
			<h3 className={styles.title}>{pg} Videos</h3>
			<div className={styles.description}>
				<span>{length ? `${length} ${length === 1 ? 'Video' : 'Videos'} ` : 'No Videos'}</span>
				{date && length ? (
					<span className={styles.date}>Last Updated on {formattedDate(date)}</span>
				) : null}
			</div>
			{length ? (
				<button className={`btn btn-primary ${styles.deleteBtn}`} onClick={deleteHandler}>
					Delete all history
				</button>
			) : null}
		</section>
	);
};

export { PageDetails };
