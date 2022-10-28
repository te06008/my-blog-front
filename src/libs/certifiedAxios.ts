import axios from 'axios';

const certifiedAxios = axios.create();
certifiedAxios.defaults.withCredentials = true;

export default certifiedAxios;
