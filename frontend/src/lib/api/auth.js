import axios from 'axios'

export const localRegisterUser = ({
  displayName,
  email,
  password,
  phoneNum,
  gender
}) => axios.post('/api/v1.0/auth/users/register/local', {
  displayName,
  email,
  password,
  phoneNum,
  gender
})

export const localRegisterSeller = ({
  crn,
  companyName,
  email,
  password,
  managerName,
  contact
}) => axios.post('/api/v1.0/auth/sellers/register/local', {
  crn,
  companyName,
  email,
  password,
  managerName,
  contact
})

export const localLoginUser = ({ email, password }) => axios.post('/api/v1.0/auth/users/login/local', {
  email, password
})

export const socialLogin = ({ provider, accessToken }) => axios.post('/api/v1.0/auth/users/login/' + provider, {
  accessToken
})

export const socialRegister = ({
  displayName,
  phoneNum,
  gender,
  provider,
  accessToken
}) => axios.post('/api/v1.0/auth/register/' + provider, {
  displayName,
  phoneNum,
  gender,
  provider,
  accessToken
})

export const checkUserLoginStatus = () => axios.get('/api/v1.0/auth/users/check')
export const checkSellerLoginStatus = () => axios.get('/api/v1.0/auth/sellers/check')

export const logout = () => axios.post('/api/v1.0/auth/logout')