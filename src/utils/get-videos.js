import { fetchVideos } from '../services/fetch-videos';

export const getVideos = async (setVideos) => {
	try {
		const response = await fetchVideos();
		if (response.status === 200) {
			setVideos(response.data.videos);
		} else {
			console.error('ERROR: ', response);
		}
	} catch (error) {
		console.error(error);
	}
};
