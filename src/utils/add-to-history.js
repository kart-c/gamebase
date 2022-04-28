import { addHistoryService } from '../services';

export const addToHistory = async (token, video) => {
	try {
		const response = await addHistoryService(token, video);
		console.log(response);
		if (response.status === 201) {
		}
	} catch (error) {
		console.error('ERROR: ', error.response);
	}
};
