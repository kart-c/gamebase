import { toast } from 'react-toastify';
import { watchLaterDelete } from '../services';

export const deleteWatchLater = async ({
	_id,
	token,
	setBtnLoading,
	watchLaterDispatch,
	setIsVisible,
}) => {
	setBtnLoading((prev) => ({ ...prev, watchLater: true }));
	try {
		const response = await watchLaterDelete(_id, token);
		if (response.status === 200) {
			toast.success('Removed from watch later');
			watchLaterDispatch({
				type: 'REMOVE_FROM_WATCHLATER',
				payload: { watchlater: response.data.watchlater, date: response.data.date },
			});
		}
	} catch (error) {
		toast.error(error.response.data.errors[0]);
		console.error('ERROR: ', error);
	} finally {
		setBtnLoading((prev) => ({ ...prev, watchLater: true }));
		setIsVisible((prev) => !prev);
	}
};
