import axios from 'axios';

export const likeService = (token, video) =>
	axios.post(
		'/api/user/likes',
		{
			video,
		},
		{ headers: { authorization: token } }
	);
