import { toast } from 'react-toastify';
import { deletePlaylistService } from '../services';

export const deletePlaylist = async ({ _id, token, playlistsDispatch, setBtnLoader }) => {
	setBtnLoader(true);
	try {
		const response = await deletePlaylistService(_id, token);
		if (response.status === 200) {
			toast.success('Deleted playlist');
			playlistsDispatch({ type: 'REMOVE_PLAYLIST', payload: response.data.playlists });
		}
	} catch (error) {
		toast.error(error.response.data.errors[0]);
		console.error('ERROR: ', error);
	} finally {
		setBtnLoader(false);
	}
};
