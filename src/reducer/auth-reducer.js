export const authReducer = (state, { type, payload }) => {
	switch (type) {
		case 'LOGIN':
			return { ...state, token: payload.token, user: payload.user };

		case 'SIGNUP':
			return { ...state, token: payload.token, user: payload.user };

		case 'FETCH_USER':
			return { ...state, token: payload.token, user: payload.user };

		case 'LOGOUT':
			return { ...state, token: '', user: '' };

		default:
			throw new Error('NO CASE DEFINED IN AUTH REDUCER');
	}
};
