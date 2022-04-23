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
			watchLaterDispatch({ type: 'ADD_TO_WATCHLATER', payload: response.data.watchlater });
		}
	} catch (error) {
		console.error('ERROR: ', error.response);
	} finally {
		setBtnLoading((prev) => ({ ...prev, watchLater: false }));
		setIsVisible(false);
	}
};
