import axios from 'axios';

export const fetchLikes = (token) =>
	axios.get('/api/user/likes', { headers: { authorization: token } });
