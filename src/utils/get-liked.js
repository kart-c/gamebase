import { fetchLikes } from '../services';

export const getLikedVideos = async (likesDispatch, token) => {
	try {
		const response = await fetchLikes(token);
		if (response.status === 200) {
			likesDispatch({ type: 'FETCH_LIKED_VIDEOS', payload: response.data.likes });
		}
	} catch (error) {
		console.error('ERROR: ', error.response);
	}
};
