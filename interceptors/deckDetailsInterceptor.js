import axios from 'axios';
import {API_HOST_DECK_DETAILS as DECK_DETAILS} from 'react-native-dotenv';

const deckDetails = axios.create({
  timeout: 2000,
  baseURL: DECK_DETAILS,
});

export default deckDetails;
