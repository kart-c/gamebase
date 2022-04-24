import { useState } from 'react';
import { useAuth, usePlaylists } from '../../context';
import { newPlaylistHandler } from '../../utils';
import styles from './PlaylistModal.module.css';

const PlaylistModal = ({ setIsActive }) => {
	const [newPlaylist, setNewPlaylist] = useState(false);
	const [playlist, setPlaylist] = useState({
		title: '',
		description: '',
	});
	const {
		authState: { token },
	} = useAuth();
	const {
		playlistsState: { playlists },
		playlistsDispatch,
	} = usePlaylists();

	const cancelBtnHandler = () => {
		setNewPlaylist(false);
		setPlaylist((prev) => ({ ...prev, title: '', description: '' }));
	};

	const inputHandler = (e) => {
		const { name } = e.target;
		const { value } = e.target;
		setPlaylist((prev) => ({ ...prev, [name]: value }));
	};

	const newBtnHandler = () => {
		if (playlist.title) {
			newPlaylistHandler({ token, playlist, setPlaylist, setNewPlaylist, playlistsDispatch });
		}
	};

	console.log(playlists);

	return (
		<>
			<div className={styles.backdrop} onClick={() => setIsActive((prev) => !prev)}></div>
			<div className={styles.modal}>
				<h3>Playlist</h3>

				{!newPlaylist && (
					<>
						{playlists.length > 0 ? (
							<ul className={styles.playlistContainer}>
								{playlists.map((playlist) => (
									<li className="checkbox-container" key={playlist._id}>
										<input type="checkbox" name={playlist.name} id={playlist._id} />
										<label htmlFor={playlist._id}>{playlist.title}</label>
									</li>
								))}
							</ul>
						) : null}
						<button
							className={`btn btn-primary ${styles.modalBtn}`}
							onClick={() => setNewPlaylist(true)}
						>
							Add Playlist
						</button>
					</>
				)}
				{newPlaylist && (
					<div className={styles.newPlaylist}>
						<input
							type="text"
							name="title"
							value={playlist.title}
							placeholder="Title"
							onChange={inputHandler}
						/>
						<textarea
							type="text"
							name="description"
							value={playlist.description}
							rows="4"
							placeholder="Description"
							onChange={inputHandler}
						/>
						<div className={styles.btnContainer}>
							<button className="btn btn-primary" onClick={newBtnHandler}>
								Add
							</button>
							<button className={`btn btn-primary ${styles.cancelBtn}`} onClick={cancelBtnHandler}>
								Cancel
							</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export { PlaylistModal };
