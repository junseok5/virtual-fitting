import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import LoginTemplate from 'components/login/LoginTemplate'
import LoginForm from 'components/login/LoginForm'

const LoginUserPage = () => {
  return (
    <PageTemplate>
      <LoginTemplate>
        <LoginForm loginType="사용자" />
      </LoginTemplate>
    </PageTemplate>
  )
}

export default LoginUserPage