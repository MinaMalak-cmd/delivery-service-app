import axios from 'axios';
export const BASE_API = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });
