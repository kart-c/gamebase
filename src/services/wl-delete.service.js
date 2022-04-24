import axios from 'axios';

export const watchLaterDelete = (_id, token) =>
	axios.delete(`/api/user/watchlater/${_id}`, {
		headers: { authorization: token },
	});
