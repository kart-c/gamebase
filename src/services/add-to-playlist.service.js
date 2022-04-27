import axios from 'axios';

export const addToPlaylistService = (token, _id, video) =>
	axios.post(`/api/user/playlists/${_id}`, { video }, { headers: { authorization: token } });
