import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import RegSeller from 'components/register/RegSeller'

const RegSellerPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <RegSeller />
      </MainTemplate>
    </PageTemplate>
  )
}

export default RegSellerPage