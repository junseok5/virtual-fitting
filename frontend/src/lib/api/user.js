import axios from 'axios'

export const getUserInfo = () => axios.get('/api/v1.0/users')