import axios from 'axios'

import { API_HOST_SPECIFIC_CARD as CARD } from 'react-native-dotenv'

const card = axios.create({
    timeout: 2000,
    baseURL: CARD
})

export default card