import { toast } from 'react-toastify';
import { likeDeleteService } from '../services';

export const deleteLike = async ({ _id, token, likesDispatch, setBtnLoading, setIsVisible }) => {
	setBtnLoading((prev) => ({ ...prev, likes: true }));
	try {
		const response = await likeDeleteService(_id, token);
		if (response.status === 200) {
			toast.success('Video removed from likes');
			likesDispatch({
				type: 'REMOVE_FROM_LIKES',
				payload: { likes: response.data.likes, date: response.data.date },
			});
		}
	} catch (error) {
		toast.error(error.response.data.errors[0]);
		console.error('ERROR: ', error);
	} finally {
		setBtnLoading((prev) => ({ ...prev, likes: false }));
		setIsVisible(false);
	}
};
