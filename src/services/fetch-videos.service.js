import axios from 'axios';

export const fetchVideos = () => axios.get('/api/videos');
