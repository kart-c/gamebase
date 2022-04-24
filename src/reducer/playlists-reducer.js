export const playlistsReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_NEW_PLAYLIST':
			return { ...state, playlists: payload };

		default:
			throw new Error('NO CASE DEFINED IN PLAYLISTS REDUCER');
	}
};
