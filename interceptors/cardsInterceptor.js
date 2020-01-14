import axios from 'axios'

import { API_HOST_CARDS as CARDS } from 'react-native-dotenv'

const cards = axios.create({
    timeout: 2000,
    baseURL: CARDS
})

export default cards