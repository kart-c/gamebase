import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth, usePlaylists } from '../../context';
import { addToPlaylist, newPlaylistHandler, removeFromPlaylist } from '../../utils';
import styles from './PlaylistModal.module.css';

const PlaylistModal = ({ setModalActive, playlistVideo }) => {
	const [newPlaylist, setNewPlaylist] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [checkboxLoader, setCheckboxLoader] = useState(false);
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
			newPlaylistHandler({
				token,
				playlist,
				setPlaylist,
				setNewPlaylist,
				playlistsDispatch,
				setIsLoading,
			});
		} else {
			toast.error('Title cannot be empty');
		}
	};

	const isVideoPresent = (_id) => {
		const currentPlaylist = playlists.find((playlist) => playlist._id === _id);
		const isVideoPresent = currentPlaylist.videos.some((video) => video._id === playlistVideo._id);
		return isVideoPresent;
	};

	const newPlaylistVideo = (_id) => {
		if (isVideoPresent(_id)) {
			removeFromPlaylist({
				token,
				playlist_id: _id,
				videoId: playlistVideo._id,
				playlistsDispatch,
				setCheckboxLoader,
			});
		} else {
			addToPlaylist({
				token,
				_id,
				video: playlistVideo,
				playlistsDispatch,
				setCheckboxLoader,
			});
		}
	};

	const backdropHandler = (e) => {
		e.stopPropagation();
		setModalActive((prev) => !prev);
	};

	return (
		<>
			<div className={styles.backdrop} onClick={backdropHandler}></div>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<h3>Playlist</h3>

				{!newPlaylist && (
					<>
						{playlists.length > 0 ? (
							<ul className={styles.playlistContainer}>
								{playlists.map((playlist) => (
									<li className="checkbox-container" key={playlist._id}>
										<input
											type="checkbox"
											name={playlist.name}
											id={playlist._id}
											checked={isVideoPresent(playlist._id)}
											onChange={() => newPlaylistVideo(playlist._id)}
											disabled={checkboxLoader}
										/>
										<label htmlFor={playlist._id}>{playlist.title}</label>
									</li>
								))}
							</ul>
						) : null}
						<button
							className={`btn btn-primary ${styles.modalBtn}`}
							onClick={(e) => {
								e.stopPropagation();
								setNewPlaylist(true);
							}}
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
							<button className="btn btn-primary" onClick={newBtnHandler} disabled={isLoading}>
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
