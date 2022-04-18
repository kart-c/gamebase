import { authService } from '../services';

export const authHandler = async (authType, user, authDispatch) => {
	try {
		const response = await authService(authType, user);
		console.log(response);
		if (authType === 'login') {
			authDispatch({
				type: 'LOGIN',
				payload: { token: response.data.encodedToken, user: response.data.foundUser },
			});
		}
	} catch (error) {
		console.error(error.response);
	}
};
