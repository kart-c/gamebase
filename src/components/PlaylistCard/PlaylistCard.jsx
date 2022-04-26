import { useState } from 'react';
import { empty } from '../../assets';
import { useAuth, usePlaylists } from '../../context';
import { deletePlaylist } from '../../utils';
import styles from './PlaylistCard.module.css';

const PlaylistCard = ({ title, playlistImg, description, videos, _id }) => {
	const [btnLoader, setBtnLoader] = useState(false);
	const {
		authState: { token },
	} = useAuth();
	const { playlistsDispatch } = usePlaylists();

	const names = videos.reduce(
		(acc, curr) => (videos.length === 1 ? acc + curr.title : (acc += curr.title + ', ')),
		''
	);

	const text = description
		? description
		: videos.length > 0
		? `This playlist includes ${names}`
		: 'Empty Playlist';

	const deleteBtnHandler = (e) => {
		e.stopPropagation();
		deletePlaylist({ _id, token, playlistsDispatch, setBtnLoader });
	};

	return (
		<article className={styles.playlist} disabled={btnLoader}>
			<div className={styles.playlistDescription}>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
			<div className={styles.imageContainer}>
				<img src={playlistImg ?? empty} alt={title} className="resp-img" />
				<button onClick={deleteBtnHandler} disabled={btnLoader}>
					<i className="fa-solid fa-trash-can" disabled={btnLoader}></i>
				</button>
			</div>
		</article>
	);
};

export { PlaylistCard };
