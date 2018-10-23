import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import RegUserContainer from 'containers/register/RegUserContainer'
import ErrorMessageModalContainer from 'containers/modal/ErrorMessageModalContainer'

const RegUserPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <RegUserContainer />
        <ErrorMessageModalContainer />
      </MainTemplate>
    </PageTemplate>
  )
}

export default RegUserPage