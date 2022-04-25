export const playlistsReducer = (state, { type, payload }) => {
	switch (type) {
		case 'ADD_NEW_PLAYLIST':
			return { ...state, playlists: payload };

		case 'ADD_NEW_VIDEO':
			const newPlaylists = (playlists) =>
				playlists.map((playlist) =>
					playlist._id === payload._id ? { ...playlist, videos: payload.videos } : playlist
				);
			return { ...state, playlists: newPlaylists(state.playlists) };

		default:
			throw new Error('NO CASE DEFINED IN PLAYLISTS REDUCER');
	}
};
