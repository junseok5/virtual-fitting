import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainWrapper from 'components/common/MainWrapper'
import CategoryContainer from 'containers/common/CategoryContainer'
import ContentWrapper from 'components/common/ContentWrapper'
import ProductContainer from 'containers/product/ProductContainer'
import Base from 'containers/common/Base'

const ProductPage = ({ match }) => {
  const { id } = match.params

  return (
    <PageTemplate>
      <MainWrapper>
        <CategoryContainer />
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