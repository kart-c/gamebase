export const watchLaterReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_TO_WATCHLATER':
			return { ...state, watchlater: payload };

		case 'REMOVE_FROM_WATCHLATER':
			return { ...state, watchlater: payload };

		default:
			throw new Error('NO CASE DEFINED IN WATCH LATER REDUCER');
	}
};
