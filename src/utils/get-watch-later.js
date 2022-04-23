import { fetchWatchLater } from '../services';

export const getWatchLater = async (watchLaterDispatch, token) => {
	const response = await fetchWatchLater(token);
	console.log(response);
};
