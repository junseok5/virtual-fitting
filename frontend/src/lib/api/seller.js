import axios from 'axios'

export const getSellerInfo = () => axios.get('/api/v1.0/sellers')

export const patchSellerInfo = (patchData) => axios.patch('/api/v1.0/sellers', patchData)

export const patchSellerPassword = (patchData) => axios.patch('/api/v1.0/sellers/password', patchData)

export const deleteSellerInfo = () => axios.delete('/api/v1.0/sellers')