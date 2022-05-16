import { fetchVideos } from '../services/fetch-videos.service';

export const getVideos = async (setVideos, setLoading) => {
	try {
		const response = await fetchVideos();
		if (response.status === 200) {
			setVideos(response.data.videos);
		}
	} catch (error) {
		console.error(error);
	} finally {
		setLoading(false);
	}
};
