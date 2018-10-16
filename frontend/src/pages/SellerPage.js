import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainWrapper from 'components/common/MainWrapper'
import Category from 'components/common/Category'
import ContentWrapper from 'components/common/ContentWrapper'
import SellerInfo from 'components/seller/SellerInfo'

const SellerPage = () => {
  return (
    <PageTemplate>
      <MainWrapper>
        <Category />
        <ContentWrapper>
          <SellerInfo />
        </ContentWrapper>
      </MainWrapper>
    </PageTemplate>
  )
}

export default SellerPage