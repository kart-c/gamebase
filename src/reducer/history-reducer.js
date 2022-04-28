export const historyReducer = (state, { action, payload }) => {
	switch (action) {
		case 'ADD_TO_HISTORY':
			return { ...state, history: payload };

		default:
			throw new Error('NO CASE DEFINED IN HISTORY REDUCER');
	}
};
