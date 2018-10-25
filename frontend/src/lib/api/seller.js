import axios from 'axios'

export const getSellerInfo = () => axios.get('/api/v1.0/sellers')