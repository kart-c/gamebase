export const historyReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_TO_HISTORY':
			return { ...state, history: payload.history, date: payload.date };

		case 'REMOVE_FROM_HISTORY':
			return { ...state, history: payload.history, date: payload.date };

		case 'GET_HISTORY':
			return { ...state, history: payload };

		case 'CLEAR_HISTORY':
			return { ...state, history: payload };

		default:
			throw new Error('NO CASE DEFINED IN HISTORY REDUCER');
	}
};
