import React, { Component } from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainWrapper from 'components/common/MainWrapper'
import CategoryContainer from 'containers/common/CategoryContainer'
import ContentWrapper from 'components/common/ContentWrapper'
import ProductProto from 'components/product/ProductProto'
import Base from 'containers/common/Base'


const ProductProtoPage = ({ match }) => {
  const { id } = match.params

  return (
    <PageTemplate>
      <MainWrapper>
        <CategoryContainer />
        <ContentWrapper>
          <ProductProto
            id={id}
          />
        </ContentWrapper>
        <Base />
      </MainWrapper>
    </PageTemplate>
  )
}

export default ProductProtoPage