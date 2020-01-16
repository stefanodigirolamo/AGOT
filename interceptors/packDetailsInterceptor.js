import axios from 'axios'
import { API_HOST_PACK_DETAILS as PACK_DETAILS } from 'react-native-dotenv'

const packDetails = axios.create({
    timeout: 2000,
    baseURL: PACK_DETAILS
})

export default packDetails