import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import RegAddedContainer from 'containers/register/RegAddedContainer'
import ErrorMessageModalContainer from 'containers/modal/ErrorMessageModalContainer'

const RegAddedPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <RegAddedContainer />
        <ErrorMessageModalContainer />
      </MainTemplate>
    </PageTemplate>
  )
}

export default RegAddedPage