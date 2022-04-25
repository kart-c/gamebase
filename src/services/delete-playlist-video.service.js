import axios from 'axios';

export const deletePlaylistVideo = (playlist_id, token, videoId) =>
	axios.delete(`/api/user/playlists/${playlist_id}/${videoId}`, {
		headers: { authorization: token },
	});
