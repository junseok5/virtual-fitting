import axios from 'axios'

export const getUserInfo = () => axios.get('/api/v1.0/users')

export const patchUserInfo = (patchData) => axios.patch('/api/v1.0/users', patchData)

export const patchUserPassword = (patchData) => axios.patch('/api/v1.0/users/password', patchData)

export const uploadPhoto = ({ file }) => {
  const data = new FormData()
  data.append('photo', file)
  return axios.post('/api/v1.0/files/users-photo', data)
}

export const deleteUserInfo = () => axios.delete('/api/v1.0/users')