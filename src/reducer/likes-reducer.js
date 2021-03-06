export const likesReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_TO_LIKES':
			return { ...state, likes: payload.likes, date: payload.date };

		case 'REMOVE_FROM_LIKES':
			return { ...state, likes: payload.likes, date: payload.date };

		case 'FETCH_LIKED_VIDEOS':
			return { ...state, likes: payload };

		case 'CLEAR':
			return { ...state, likes: [] };

		default:
			throw new Error('NO CASE DEFINED IN LIKES REDUCER');
	}
};
