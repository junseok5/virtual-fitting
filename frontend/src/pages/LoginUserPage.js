import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import LoginTemplate from 'components/login/LoginTemplate'
import UserForm from 'components/login/UserForm'

const LoginPage = () => {
  return (
    <PageTemplate>
      <LoginTemplate>
        <UserForm />
      </LoginTemplate>
    </PageTemplate>
  )
}

export default LoginPage