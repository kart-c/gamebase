import axios from 'axios';

export const clearHistoryService = (token) =>
	axios.delete('/api/user/history/all', { headers: { authorization: token } });
