import { deletePlaylistVideo } from '../services';

export const removeFromPlaylist = async ({
	playlist_id,
	token,
	videoId,
	setCheckboxLoader,
	playlistsDispatch,
}) => {
	setCheckboxLoader(true);
	try {
		const response = await deletePlaylistVideo(playlist_id, token, videoId);
		if (response.status === 200) {
			playlistsDispatch({
				type: 'DELETE_FROM_PLAYLIST',
				payload: { playlist: response.data.playlist, date: response.data.date },
			});
		}
	} catch (error) {
		console.error('ERROR: ', error.response);
	} finally {
		setCheckboxLoader(false);
	}
};
