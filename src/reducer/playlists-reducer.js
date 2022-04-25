export const playlistsReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_NEW_PLAYLIST':
			return { ...state, playlists: payload };

		case 'ADD_NEW_VIDEO':
			const newPlaylists = (playlists) =>
				playlists.map((playlist) => (playlist._id === payload._id ? payload : playlist));
			return { ...state, playlists: newPlaylists(state.playlists) };

		case 'DELETE_FROM_PLAYLIST':
			const filterPlaylists = (playlists) =>
				playlists.map((playlist) => (playlist._id === payload._id ? payload : playlist));
			return { ...state, playlists: filterPlaylists(state.playlists) };

		default:
			throw new Error('NO CASE DEFINED IN PLAYLISTS REDUCER');
	}
};
