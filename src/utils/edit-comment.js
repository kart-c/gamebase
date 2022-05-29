import axios from 'axios';

export const editComment = async (_id, token, note, commentDispatch) => {
	try {
		const response = await axios.post(
			`/api/user/notes/update/${_id}`,
			{ note },
			{ headers: { authorization: token } }
		);
		if (response.status === 200) {
			commentDispatch({ type: 'EDIT_COMMENT', payload: response.data.notes });
		}
	} catch (error) {
		console.error('ERROR', error);
	}
};
