import axios from 'axios';

export const deleteComment = async (_id, token, note, commentDispatch) => {
	try {
		const response = await axios.post(
			`/api/user/notes/delete/${_id}`,
			{ note },
			{ headers: { authorization: token } }
		);
		if (response.status === 200) {
			commentDispatch({ type: 'DELETE_COMMENT', payload: response.data.notes });
		}
	} catch (error) {
		console.error('ERROR', error);
	}
};
