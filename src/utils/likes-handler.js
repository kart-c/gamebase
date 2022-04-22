import { likeService } from '../services';

export const likesHandler = async (token, video) => {
	try {
		const response = await likeService(token, video);
		console.log(response);
	} catch (error) {
		console.error('ERROR: ', error.response);
	}
};
