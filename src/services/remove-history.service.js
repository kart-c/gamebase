import axios from 'axios';

export const removeHistory = (token, _id) =>
	axios.delete(`/api/user/history/${_id}`, { headers: { authorization: token } });
