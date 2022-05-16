import { toast } from 'react-toastify';
import { authService } from '../services';

export const authHandler = async ({ authType, user, authDispatch, setUser, navigate }) => {
	try {
		const response = await authService(authType, user);
		if (response.status === 200) {
			if (authType === 'login') {
				toast.success(`Welcome back, ${response.data.foundUser.firstName}`);
				if (user.rememberMe) {
					localStorage.setItem('token', response.data.encodedToken);
					localStorage.setItem('user', JSON.stringify(response.data.foundUser));
				}
				authDispatch({
					type: 'LOGIN',
					payload: { token: response.data.encodedToken, user: response.data.foundUser },
				});
				setUser((prev) => ({ ...prev, email: '', password: '', rememberMe: false }));
				navigate(location?.state?.from?.pathname || -1, { replace: true });
			}
		} else if (response.status === 201) {
			toast.success(`Welcome, ${response.data.createdUser.firstName}`);
			localStorage.setItem('token', response.data.encodedToken);
			localStorage.setItem('user', JSON.stringify(response.data.createdUser));
			authDispatch({
				type: 'SIGNUP',
				payload: { token: response.data.encodedToken, user: response.data.createdUser },
			});
			setUser((prev) => ({
				...prev,
				email: '',
				password: '',
				firstName: '',
				lastName: '',
				confirmPassword: '',
			}));
			navigate(-2);
		}
	} catch (error) {
		toast.error(error.response.data.errors[0]);
		console.error(error);
	}
};
