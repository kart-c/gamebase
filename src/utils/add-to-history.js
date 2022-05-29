import { addHistoryService } from '../services';

export const addToHistory = async (token, video, historyDispatch) => {
	try {
		const response = await addHistoryService(token, video);
		if (response.status === 201) {
			historyDispatch({
				type: 'ADD_TO_HISTORY',
				payload: { history: response.data.history, date: response.data.date },
			});
		}
	} catch (error) {
		console.error('ERROR: ', error);
	}
};
