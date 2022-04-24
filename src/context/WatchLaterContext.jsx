import { createContext, useContext, useReducer } from 'react';
import { watchLaterReducer } from '../reducer/watch-later-reducer';

const WatchLaterContext = createContext({
	watchLaterState: { watchlater: [], date: null },
	watchLaterDispatch: () => {},
});

const WatchLaterProvider = ({ children }) => {
	const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, {
		watchlater: [],
		date: null,
	});

	return (
		<WatchLaterContext.Provider value={{ watchLaterState, watchLaterDispatch }}>
			{children}
		</WatchLaterContext.Provider>
	);
};

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
