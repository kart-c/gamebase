import axios from 'axios';

export const watchLaterService = (token, video) =>
	axios.post(
		'/api/user/watchlater',
		{
			video,
		},
		{ headers: { authorization: token } }
	);
