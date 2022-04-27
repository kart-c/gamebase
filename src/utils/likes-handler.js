import { likeService } from '../services';

export const likesHandler = async ({
	setBtnLoading,
	token,
	video,
	likesDispatch,
	setIsVisible,
}) => {
	setBtnLoading((prev) => ({ ...prev, likes: true }));
	try {
		const response = await likeService(token, video);
		if (response.status === 201) {
			likesDispatch({
				type: 'ADD_TO_LIKES',
				payload: { likes: response.data.likes, date: response.data.date },
			});
		}
	} catch (error) {
		console.error('ERROR: ', error.response);
	} finally {
		setBtnLoading((prev) => ({ ...prev, likes: false }));
		setIsVisible(false);
	}
};
