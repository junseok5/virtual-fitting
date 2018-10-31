import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainWrapper from 'components/common/MainWrapper'
import Category from 'components/common/Category'
import ContentWrapper from 'components/common/ContentWrapper'
import ProductContainer from 'containers/product/ProductContainer'
import Base from 'containers/common/Base'

const ProductPage = ({ match }) => {
  const { id } = match.params

  return (
    <PageTemplate>
      <MainWrapper>
        <Category />
        <ContentWrapper>
          <ProductContainer
            id={id}
          />
        </ContentWrapper>
        <Base />
      </MainWrapper>
    </PageTemplate>
  )
}

export default ProductPage