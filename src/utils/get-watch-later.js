import { fetchWatchLater } from '../services';

export const getWatchLater = async (watchLaterDispatch, token, setLoading) => {
	try {
		const response = await fetchWatchLater(token);
		if (response.status === 200) {
			watchLaterDispatch({ type: 'GET_WATCHLATER', payload: response.data.watchlater });
		}
	} catch (error) {
		console.error('ERROR: ', error);
	} finally {
		setLoading(false);
	}
};
