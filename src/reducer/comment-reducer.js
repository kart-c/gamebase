export const commentReducer = (state, { type, payload }) => {
	switch (type) {
		case 'GET_COMMENTS':
			return { ...state, comments: payload };

		case 'NEW_COMMENT':
			return { ...state, comments: payload };

		case 'DELETE_COMMENT':
			return { ...state, comments: payload };

		default:
			throw new Error('NO CASE DEFINED IN COMMENT REDUCER');
	}
};
