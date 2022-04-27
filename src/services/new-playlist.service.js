import axios from 'axios';

export const newPlaylistService = (token, playlist) =>
	axios.post(
		'/api/user/playlists',
		{ playlist },
		{
			headers: { authorization: token },
		}
	);
