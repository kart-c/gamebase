import axios from 'axios';

export const getCategoriesService = () => axios.get('/api/categories');
