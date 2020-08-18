import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-solar-system.herokuapp.com/',
});

export default api;