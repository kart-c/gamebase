import { likeDeleteService } from '../services';

export const deleteLike = async ({ _id, token, likesDispatch, setBtnLoading, setIsVisible }) => {
	setBtnLoading((prev) => ({ ...prev, likes: true }));
	try {
		const response = await likeDeleteService(_id, token);
		console.log(response);
		if (response.status === 200) {
			likesDispatch({ type: 'REMOVE_FROM_LIKES', payload: response.data.likes });
		}
	} catch (error) {
		console.error('ERROR: ', error.response);
	} finally {
		setBtnLoading((prev) => ({ ...prev, likes: false }));
		setIsVisible(false);
	}
};
