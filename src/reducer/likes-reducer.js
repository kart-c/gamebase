export const likesReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_TO_LIKES':
			return { ...state, likes: payload };

		case 'REMOVE_FROM_LIKES':
			return { ...state, likes: payload };

		default:
			throw new Error('NO CASE DEFINED IN LIKES REDUCER');
	}
};
