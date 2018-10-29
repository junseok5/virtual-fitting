import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import RegSellerContainer from 'containers/register/RegSellerContainer'
import Base from 'containers/common/Base'
// import ErrorMessageModalContainer from 'containers/modal/ErrorMessageModalContainer'

const RegSellerPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <RegSellerContainer />
        <Base />
      </MainTemplate>
    </PageTemplate>
  )
}

export default RegSellerPage