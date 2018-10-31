import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainWrapper from 'components/common/MainWrapper'
import CategoryContainer from 'containers/common/CategoryContainer'
import ContentWrapper from 'components/common/ContentWrapper'
import SellerInfoContainer from 'containers/seller/SellerInfoContainer'
import Base from 'containers/common/Base'

const SellerPage = () => {
  return (
    <PageTemplate>
      <MainWrapper>
        <CategoryContainer />
        <ContentWrapper>
          <SellerInfoContainer />
        </ContentWrapper>
        <Base />
      </MainWrapper>
    </PageTemplate>
  )
}

export default SellerPage