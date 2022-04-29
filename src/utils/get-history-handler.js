import { getHistoryService } from '../services';

export const getHistory = async (token, historyDispatch) => {
	try {
		const response = await getHistoryService(token);
		if (response.status === 200) {
			historyDispatch({ type: 'GET_HISTORY', payload: response.data.history });
		}
	} catch (error) {
		console.error('ERROR: ', error.response);
	}
};
