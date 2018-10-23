import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import RegUserContainer from 'containers/register/RegUserContainer'

const RegUserPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <RegUserContainer />
      </MainTemplate>
    </PageTemplate>
  )
}

export default RegUserPage