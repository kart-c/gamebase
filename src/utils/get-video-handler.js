import { getVideoService } from '../services';

export const getVideo = async (_id, setCurrentVideo, setIsLoading) => {
	try {
		const response = await getVideoService(_id);
		if (response.status === 200) {
			setCurrentVideo(response.data.video);
		}
	} catch (error) {
		console.error('ERROR: ', error.response);
	} finally {
		setIsLoading(false);
	}
};
