import React from 'react';
import { PlaylistCard } from '../../components';
import styles from './Playlist.module.css';

const Playlist = () => {
	return (
		<div className="pg-defaults">
			<ul className={styles.playlistContainer}>
				<PlaylistCard />
				<PlaylistCard />
				<PlaylistCard />
				<PlaylistCard />
			</ul>
		</div>
	);
};

export { Playlist };
