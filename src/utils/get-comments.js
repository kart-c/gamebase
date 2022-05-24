import axios from 'axios';

export const getComments = async (token) => {
	try {
		const response = await axios.get('/api/user/notes', { headers: { authorization: token } });
		console.log(response);
	} catch (error) {
		console.error('ERROR', error);
	}
};
