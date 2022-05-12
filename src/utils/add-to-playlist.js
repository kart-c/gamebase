import { toast } from 'react-toastify';
import { addToPlaylistService } from '../services';

export const addToPlaylist = async ({
	token,
	_id,
	video,
	playlistsDispatch,
	setCheckboxLoader,
}) => {
	setCheckboxLoader(true);
	try {
		const response = await addToPlaylistService(token, _id, video);
		if (response.status === 201) {
			toast.success('Added to playlist');
			playlistsDispatch({
				type: 'ADD_NEW_VIDEO',
				payload: { playlist: response.data.playlist, date: response.data.date },
			});
		}
	} catch (error) {
		toast.error(error.response.data.errors[0]);
		console.error('ERROR: ', error);
	} finally {
		setCheckboxLoader(false);
	}
};
