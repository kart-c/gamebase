import { getPlaylistService } from '../services';

export const getPlaylist = async (token, playlistsDispatch) => {
	try {
		const response = await getPlaylistService(token);
		if (response.status === 200) {
			playlistsDispatch({ type: 'GET_PLAYLISTS', playload: response.data.playlists });
		}
	} catch (error) {
		console.error('ERROR: ', error.response);
	}
};
