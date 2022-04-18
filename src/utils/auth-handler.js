import { authService } from '../services';

export const authHandler = async (authType, user, authDispatch, setUser, navigate) => {
	try {
		const response = await authService(authType, user);
		if (authType === 'login') {
			if (user.rememberMe) {
				localStorage.setItem('token', response.data.encodedToken);
				localStorage.setItem('user', JSON.stringify(response.data.foundUser));
			}
			authDispatch({
				type: 'LOGIN',
				payload: { token: response.data.encodedToken, user: response.data.foundUser },
			});
			setUser((prev) => ({ ...prev, email: '', password: '', rememberMe: false }));
			navigate('/');
		}
	} catch (error) {
		console.error(error.response);
	}
};
