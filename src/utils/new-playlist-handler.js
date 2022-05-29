import { newPlaylistService } from '../services';
import { addToPlaylist } from './add-to-playlist';

export const newPlaylistHandler = async ({
	token,
	playlist,
	setNewPlaylist,
	setPlaylist,
	playlistsDispatch,
	setIsLoading,
	playlists,
	playlistVideo,
	setCheckboxLoader,
}) => {
	setIsLoading(true);
	try {
		const response = await newPlaylistService(token, playlist);
		if (response.status === 201) {
			const currPlaylist = response.data.playlists
				.reverse()
				.find((list) => list.title === playlist.title);
			addToPlaylist({
				token,
				_id: currPlaylist._id,
				video: playlistVideo,
				playlistsDispatch,
				setCheckboxLoader,
			});
			setNewPlaylist(false);
			setPlaylist((prev) => ({ ...prev, title: '', description: '' }));
			await playlistsDispatch({ type: 'ADD_NEW_PLAYLIST', payload: response.data.playlists });
		}
	} catch (error) {
		console.error('ERROR: ', error);
	} finally {
		setIsLoading(false);
	}
};
