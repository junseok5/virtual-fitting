import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import RegAddedContainer from 'containers/register/RegAddedContainer'
import Base from 'containers/common/Base'
// import ErrorMessageModalContainer from 'containers/modal/ErrorMessageModalContainer'

const RegAddedPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <RegAddedContainer />
        <Base />
      </MainTemplate>
    </PageTemplate>
  )
}

export default RegAddedPage