import { createContext, useContext, useReducer } from 'react';
import { authReducer } from '../reducer/auth-reducer';

const AuthContext = createContext({ authState: { token: '', user: {} }, authDispatch: () => {} });

const AuthProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, { token: '', user: {} });

	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
