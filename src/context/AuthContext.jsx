import { createContext, useContext } from 'react';

const AuthContext = createContext({ token: '', user: {} });

const AuthProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, { token: '', user: {} });

	return (
		<AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
