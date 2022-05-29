import { getVideoService } from '../services';

export const getVideo = async (_id, setCurrentVideo, setIsLoading, navigate) => {
	try {
		const response = await getVideoService(_id);
		if (response.status === 200) {
			setCurrentVideo(response.data.video);
		}
	} catch (error) {
		console.error('ERROR: ', error);
		navigate('*');
	} finally {
		setIsLoading(false);
	}
};
