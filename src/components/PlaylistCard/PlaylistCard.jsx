import React from 'react';
import styles from './PlaylistCard.module.css';

const PlaylistCard = () => {
	return (
		<article className={styles.playlist}>
			<h3>Playlist name</h3>
			<div className={styles.iconContainer}>
				<i className="fa-solid fa-list-check"></i>
			</div>
		</article>
	);
};

export { PlaylistCard };
