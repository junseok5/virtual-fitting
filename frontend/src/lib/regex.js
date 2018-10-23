// Regex definition
const regex = {
  email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^[A-Za-z0-9]{6,12}$/,
  displayName: /^[a-zA-Z0-9ㄱ-힣]{3,12}$/,
  managerName: /^[a-zA-Z0-9ㄱ-힣]{3,12}$/,
  phoneNum: /^\d{3}-\d{3,4}-\d{4}$/,
  companyName: /^[a-zA-Z0-9ㄱ-힣]{1,30}$/
}

export default function validation (payload) {
  return {
    register () {
      
    },
    login () {

    }
  }
}