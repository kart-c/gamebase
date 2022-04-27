import axios from 'axios';

export const deletePlaylistService = (_id, token) =>
	axios.delete(`/api/user/playlists/${_id}`, { headers: { authorization: token } });
