import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import RegUser from 'components/register/RegUser'

const RegUserPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <RegUser />
      </MainTemplate>
    </PageTemplate>
  )
}

export default RegUserPage