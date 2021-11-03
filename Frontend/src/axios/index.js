import axios from 'axios';

const DEV_API_URL = 'http://localhost:5000';
const PROD_API_URL = '';
const url = process.env.NODE_ENV === 'development' ? DEV_API_URL : PROD_API_URL;

export default axios.create({
  baseURL: url,
});
