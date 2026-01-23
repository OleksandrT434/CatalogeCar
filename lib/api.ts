import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

export default axiosClient;
