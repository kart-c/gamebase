import axios from 'axios';

export const getVideoService = (_id) => axios.get(`/api/video/${_id}`);
