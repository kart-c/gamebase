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
			playlistsDispatch({
				type: 'ADD_NEW_VIDEO',
				payload: { playlist: response.data.playlist, date: response.data.date },
			});
		}
	} catch (error) {
		console.error('ERROR: ', error.response);
	} finally {
		setCheckboxLoader(false);
	}
};
