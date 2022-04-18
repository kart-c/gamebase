import { createContext, useContext, useReducer, useEffect } from 'react';
import { authReducer } from '../reducer/auth-reducer';

const AuthContext = createContext({ authState: { token: '', user: {} }, authDispatch: () => {} });

const AuthProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, { token: '', user: {} });

	useEffect(() => {
		const token = localStorage.getItem('token');
		const user = JSON.parse(localStorage.getItem('user'));
		if (token && user) {
			authDispatch({ type: 'FETCH_USER', payload: { token, user } });
		}
	}, []);

	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
