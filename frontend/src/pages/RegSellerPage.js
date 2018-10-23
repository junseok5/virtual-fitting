import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import RegSellerContainer from 'containers/register/RegSellerContainer'

const RegSellerPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <RegSellerContainer />
      </MainTemplate>
    </PageTemplate>
  )
}

export default RegSellerPage