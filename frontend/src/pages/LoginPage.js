import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import LoginFormContainer from 'containers/login/LoginFormContainer'
import ErrorMessageModalContainer from 'containers/modal/ErrorMessageModalContainer'

const LoginUserPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <LoginFormContainer />
        <ErrorMessageModalContainer />
      </MainTemplate>
    </PageTemplate>
  )
}

export default LoginUserPage