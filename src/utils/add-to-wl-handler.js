import { toast } from 'react-toastify';
import { watchLaterService } from '../services';

export const addToWatchLater = async ({
	video,
	token,
	setBtnLoading,
	setIsVisible,
	watchLaterDispatch,
}) => {
	try {
		setBtnLoading((prev) => ({ ...prev, watchLater: true }));
		const response = await watchLaterService(token, video);
		if (response.status === 201) {
			toast.success('Added to watch later');
			watchLaterDispatch({
				type: 'ADD_TO_WATCHLATER',
				payload: { watchlater: response.data.watchlater, date: response.data.date },
			});
		}
	} catch (error) {
		toast.error(error.response.data.errors[0]);
		console.error('ERROR: ', error);
	} finally {
		setBtnLoading((prev) => ({ ...prev, watchLater: false }));
		setIsVisible(false);
	}
};
