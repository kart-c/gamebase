import { newPlaylistService } from '../services';

export const newPlaylistHandler = async ({
	token,
	playlist,
	setNewPlaylist,
	setPlaylist,
	playlistsDispatch,
}) => {
	try {
		const response = await newPlaylistService(token, playlist);
		if (response.status === 201) {
			setNewPlaylist(false);
			setPlaylist((prev) => ({ ...prev, title: '', description: '' }));
			playlistsDispatch({ type: 'ADD_NEW_PLAYLIST', payload: response.data.playlists });
		}
	} catch (error) {
		console.error('ERROR: ', error.response);
	} finally {
	}
};
