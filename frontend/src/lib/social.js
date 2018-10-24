import hello from 'hellojs'

hello.init({
  facebook: 2143040245707439,
  google: '166043396371-d3kr7afr5vln3pe7o347i1c8ufnghgj9.apps.googleusercontent.com'
}, { redirect_uri: '/register/added' })

export default(function () {
  return {
    facebook: () => {
      return new Promise((resolve, reject) => {
        hello.login('facebook', { scope: 'email' }).then(
          auth => resolve(auth.authResponse.access_token),
          e => reject(e)
        )
      })
    },
    google: () => {
      return new Promise((resolve, reject) => {
        hello.login('google', { scope: 'email' }).then(
          auth => resolve(auth.authResponse.access_token),
          e => reject(e)
        )
      })
    }
  }
})()