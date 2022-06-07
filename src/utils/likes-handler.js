import { toast } from 'react-toastify';
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
			toast.success('Video added to likes');
			likesDispatch({
				type: 'ADD_TO_LIKES',
				payload: { likes: response.data.likes, date: response.data.date },
			});
		}
	} catch (error) {
		toast.error(error.response.data.errors[0]);
		console.error('ERROR: ', error);
	} finally {
		setBtnLoading((prev) => ({ ...prev, likes: false }));
		setIsVisible('');
	}
};
