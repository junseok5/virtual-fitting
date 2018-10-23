import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import LoginFormContainer from 'containers/login/LoginFormContainer'

const LoginUserPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <LoginFormContainer />
      </MainTemplate>
    </PageTemplate>
  )
}

export default LoginUserPage