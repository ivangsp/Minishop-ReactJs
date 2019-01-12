import axios from 'axios';
const SERVER_URL = '/api';

export const fetchAllProducts = async () => {
  const response = await axios.get(SERVER_URL + '/products');
  return response.data;
};
