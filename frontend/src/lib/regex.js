// Regex definition
const email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
const password = /^[A-Za-z0-9]{6,30}$/
const displayName = /^[a-zA-Z0-9ㄱ-힣]{2,12}$/
const managerName = /^[a-zA-Z0-9ㄱ-힣]{3,12}$/
const phoneNum = /^\d{3}-\d{3,4}-\d{4}$/
const companyName = /^[a-zA-Z0-9ㄱ-힣]{1,30}$/

export default {
  email,
  password,
  displayName,
  managerName,
  phoneNum,
  companyName
}