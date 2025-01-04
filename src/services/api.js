import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const register = (userData) => API.post('/auth/register', userData);
export const login = (userData) => API.post('/auth/login', userData);
export const addFunds = (data, token) => API.post('/payment/add-funds', data, { headers: { Authorization: `Bearer ${token}` } });
export const transfer = (data, token) => API.post('/payment/transfer', data, { headers: { Authorization: `Bearer ${token}` } });
