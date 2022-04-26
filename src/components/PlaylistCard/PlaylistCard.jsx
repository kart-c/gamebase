import React from 'react';
import { empty } from '../../assets';
import styles from './PlaylistCard.module.css';

const PlaylistCard = ({ title, playlistImg, description, videos }) => {
	const names = videos.reduce(
		(acc, curr) => (videos.length === 1 ? acc + curr.title : (acc += curr.title + ', ')),
		''
	);
	const text = description
		? description
		: videos.length > 0
		? `This playlist includes ${names}`
		: 'Empty Playlist';
	return (
		<article className={styles.playlist}>
			<div className={styles.playlistDescription}>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
			<div className={styles.imageContainer}>
				<img src={playlistImg ?? empty} alt={title} className="resp-img" />
				<i className="fa-solid fa-list-check"></i>
			</div>
		</article>
	);
};

export { PlaylistCard };
