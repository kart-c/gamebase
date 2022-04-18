export const authReducer = (state, { type, payload }) => {
	switch (type) {
		case 'LOGIN':
			return { ...state, token: payload.token, user: payload.user };

		case 'SIGNUP':
			return { ...state, token: payload.token, user: payload.user };

		default:
			throw new Error('NO CASE DEFINED IN AUTH REDUCER');
	}
};
