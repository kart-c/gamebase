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
			watchLaterDispatch({ type: 'REMOVE_FROM_WATCHLATER', payload: response.data.watchlater });
		}
	} catch (error) {
		console.error('ERROR: ', error.response.data);
	} finally {
		setBtnLoading((prev) => ({ ...prev, watchLater: true }));
		setIsVisible((prev) => !prev);
	}
};
