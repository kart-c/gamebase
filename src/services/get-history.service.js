import axios from 'axios';

export const getHistoryService = (token) =>
	axios.get('/api/user/history', { headers: { authorization: token } });
