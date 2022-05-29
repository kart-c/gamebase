export const playlistsReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_NEW_PLAYLIST':
			return { ...state, playlists: payload };

		case 'GET_PLAYLISTS':
			return { ...state, playlists: payload };

		case 'REMOVE_PLAYLIST':
			return { ...state, playlists: payload };

		case 'ADD_NEW_VIDEO':
			const newPlaylists = (playlists) =>
				playlists.map((playlist) =>
					playlist._id === payload.playlist._id ? payload.playlist : playlist
				);
			return { ...state, playlists: newPlaylists(state.playlists), date: payload.date };

		case 'DELETE_FROM_PLAYLIST':
			const filterPlaylists = (playlists) =>
				playlists.map((playlist) =>
					playlist._id === payload.playlist._id ? payload.playlist : playlist
				);
			return { ...state, playlists: filterPlaylists(state.playlists), date: payload.date };

		case 'CLEAR':
			return { ...state, playlists: [] };

		default:
			throw new Error('NO CASE DEFINED IN PLAYLISTS REDUCER');
	}
};
