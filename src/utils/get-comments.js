import axios from 'axios';

export const getComments = async (token, commentDispatch) => {
	try {
		const response = await axios.get('/api/user/notes', { headers: { authorization: token } });
		if (response.status === 200) {
			commentDispatch({ type: 'GET_COMMENTS', payload: response.data.notes });
		}
	} catch (error) {
		console.error('ERROR', error);
	}
};
