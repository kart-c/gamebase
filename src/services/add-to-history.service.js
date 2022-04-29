import axios from 'axios';

export const addHistoryService = (token, video) =>
	axios.post('/api/user/history', { video }, { headers: { authorization: token } });
