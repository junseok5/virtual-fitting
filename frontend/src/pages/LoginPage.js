import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import LoginFormContainer from 'containers/login/LoginFormContainer'
import Base from 'containers/common/Base'
// import ErrorMessageModalContainer from 'containers/modal/ErrorMessageModalContainer'

const LoginUserPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <LoginFormContainer />
        <Base />
      </MainTemplate>
    </PageTemplate>
  )
}

export default LoginUserPage