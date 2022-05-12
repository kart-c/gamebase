import { getPlaylistService } from '../services';

export const getPlaylist = async (token, playlistsDispatch, setLoading) => {
	try {
		const response = await getPlaylistService(token);
		if (response.status === 200) {
			playlistsDispatch({ type: 'GET_PLAYLISTS', payload: response.data.playlists });
		}
	} catch (error) {
		console.error('ERROR: ', error);
	} finally {
		setLoading(false);
	}
};
