import axios from 'axios';

const certifiedAxios = axios.create();
certifiedAxios.defaults.withCredentials = true;
certifiedAxios.defaults.headers['Access-Control-Allow-Headers'] =
  'http://te06008.me';
export default certifiedAxios;
