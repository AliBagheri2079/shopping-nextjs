import axios from 'axios';

export const productApi = axios.create({
  baseURL: 'http://localhost:3000/api/product',
});
