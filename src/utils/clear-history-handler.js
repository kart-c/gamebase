import { clearHistoryService } from '../services/clear-history.service';

export const clearAllHistory = async (token, historyDispatch) => {
	try {
		const response = await clearHistoryService(token);
		if (response.status === 200) {
			historyDispatch({ type: 'CLEAR_HISTORY', payload: response.data.history });
		}
	} catch (error) {
		console.error('ERROR: ', error.response);
	}
};
