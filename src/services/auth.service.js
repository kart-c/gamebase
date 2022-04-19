import axios from 'axios';

export const authService = (authType, user) => axios.post(`/api/auth/${authType}`, user);
