import { createContext, useReducer, useContext } from 'react';
import { commentReducer } from '../reducer';

const CommentContext = createContext({ commentState: { comments: [] }, commentDispatch: () => {} });

const CommentProvider = ({ children }) => {
	const [commentState, commentDispatch] = useReducer(commentReducer, {
		comments: [],
	});

	return (
		<CommentContext.Provider value={{ commentState, commentDispatch }}>
			{children}
		</CommentContext.Provider>
	);
};

const useComment = () => useContext(CommentContext);

export { CommentProvider, useComment };
