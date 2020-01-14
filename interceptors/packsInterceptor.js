import axios from 'axios';
import {API_HOST_PACKS as PACKS} from 'react-native-dotenv';

const packs = axios.create({
  timeout: 2000,
  baseURL: PACKS,
});

export default packs;
