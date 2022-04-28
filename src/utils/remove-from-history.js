import { removeHistory } from '../services';

export const removeFromHistory = async (token, _id, historyDispatch) => {
	try {
		const response = await removeHistory(token, _id);
		if (response.status === 200) {
			historyDispatch({ type: 'REMOVE_FROM_HISTORY', payload: response.status.history });
		}
	} catch (error) {
		console.error('ERROR: ', error.response);
	}
};
