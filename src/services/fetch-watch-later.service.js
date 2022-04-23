import axios from 'axios';

export const fetchWatchLater = (token) =>
	axios.get('/api/user/watchlater', {
		headers: { authorization: token },
	});
