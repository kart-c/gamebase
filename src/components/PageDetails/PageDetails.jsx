import React from 'react';
import { empty } from '../../assets';
import { clearAllHistory } from '../../utils';
import { useAuth, useHistory } from '../../context';
import { useLocation } from 'react-router-dom';
import styles from './PageDetails.module.css';

const PageDetails = ({ pg, length, video, date }) => {
	const {
		authState: { token },
	} = useAuth();
	const { historyDispatch } = useHistory();
	const location = useLocation();

	const formattedDate = (date) => new Date(date).toDateString();

	const deleteHandler = () => {
		clearAllHistory(token, historyDispatch);
	};

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
			{length && location.pathname === '/history' ? (
				<button className={`btn btn-primary ${styles.deleteBtn}`} onClick={deleteHandler}>
					Delete all history
				</button>
			) : null}
		</section>
	);
};

export { PageDetails };
