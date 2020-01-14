import axios from 'axios';
import {API_HOST_DECKLIST as DECKLIST} from 'react-native-dotenv';

const decklists = axios.create({
  timeout: 2000,
  baseURL: DECKLIST,
});

export default decklists;
