import axios from 'axios';

export const getPlaylistService = (token) =>
	axios.get('/api/user/playlists', { headers: { authorization: token } });
