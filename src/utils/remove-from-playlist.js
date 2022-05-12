import { toast } from 'react-toastify';
import { deletePlaylistVideo } from '../services';

export const removeFromPlaylist = async ({
	playlist_id,
	token,
	videoId,
	setCheckboxLoader,
	playlistsDispatch,
}) => {
	setCheckboxLoader && setCheckboxLoader(true);
	try {
		const response = await deletePlaylistVideo(playlist_id, token, videoId);
		if (response.status === 200) {
			toast.success('Removed from playlist');
			playlistsDispatch({
				type: 'DELETE_FROM_PLAYLIST',
				payload: { playlist: response.data.playlist, date: response.data.date },
			});
		}
	} catch (error) {
		toast.error(error.response.data.errors[0]);
		console.error('ERROR: ', error);
	} finally {
		setCheckboxLoader && setCheckboxLoader(false);
	}
};
