import axios from 'axios';

axios.defaults.baseURL = 'https://dr-one-marketplace.onrender.com';

// Utils

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
