import { createContext, useContext, useReducer } from 'react';
import { playlistsReducer } from '../reducer';

const PlaylistsContext = createContext({
	playlistsState: { playlists: [] },
	playlistsDispatch: () => {},
});

const PlaylistsProvider = ({ children }) => {
	const [playlistsState, playlistsDispatch] = useReducer(playlistsReducer, { playlists: [] });

	return (
		<PlaylistsContext.Provider value={{ playlistsState, playlistsDispatch }}>
			{children}
		</PlaylistsContext.Provider>
	);
};

const usePlaylists = () => useContext(PlaylistsContext);

export { PlaylistsProvider, usePlaylists };
