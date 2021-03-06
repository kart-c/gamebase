import { createContext, useContext, useReducer } from 'react';
import { likesReducer } from '../reducer';

const LikesContext = createContext({ likesState: { likes: [] }, likesDispatch: () => {} });

const LikesProvider = ({ children }) => {
	const [likesState, likesDispatch] = useReducer(likesReducer, { likes: [], date: null });
	return (
		<LikesContext.Provider value={{ likesState, likesDispatch }}>{children}</LikesContext.Provider>
	);
};

const useLikes = () => useContext(LikesContext);

export { LikesProvider, useLikes };
