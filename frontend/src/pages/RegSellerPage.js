import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import RegSellerContainer from 'containers/register/RegSellerContainer'
import ErrorMessageModalContainer from 'containers/modal/ErrorMessageModalContainer'

const RegSellerPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <RegSellerContainer />
        <ErrorMessageModalContainer />
      </MainTemplate>
    </PageTemplate>
  )
}

export default RegSellerPage