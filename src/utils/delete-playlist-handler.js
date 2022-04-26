import { deletePlaylistService } from '../services';

export const deletePlaylist = async ({ _id, token, playlistsDispatch, setBtnLoader }) => {
	setBtnLoader(true);
	try {
		const response = await deletePlaylistService(_id, token);
		console.log(response);
		if (response.status === 200) {
			playlistsDispatch({ type: 'REMOVE_PLAYLIST', payload: response.data.playlists });
		}
	} catch (error) {
		console.error('ERROR: ', error.response);
	} finally {
		setBtnLoader(false);
	}
};