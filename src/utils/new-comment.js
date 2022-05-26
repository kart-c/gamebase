import axios from 'axios';

export const newComment = async (_id, token, note, commentDispatch, setComment) => {
	try {
		const response = await axios.post(
			`/api/user/notes/${_id}`,
			{ note },
			{ headers: { authorization: token } }
		);
		if (response.status === 201) {
			setComment('');
			commentDispatch({ type: 'NEW_COMMENT', payload: response.data.notes });
		}
	} catch (error) {
		console.error('ERROR', error);
	}
};
