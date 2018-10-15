import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import LoginForm from 'components/login/LoginForm'

const LoginUserPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <LoginForm loginType="사용자" />
      </MainTemplate>
    </PageTemplate>
  )
}

export default LoginUserPage