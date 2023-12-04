import axios from 'axios';

export const BASE_API = axios.create({
    // baseURL: getEnv().API_URL
    baseURL: "http://localhost:5000"
  });
