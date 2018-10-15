import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainWrapper from 'components/common/MainWrapper'
import Category from 'components/common/Category'
import ProductWrapper from 'components/product/ProductWrapper'
import Product from 'components/product/Product'

const ProductPage = () => {
  return (
    <PageTemplate>
      <MainWrapper>
        <Category />
        <ProductWrapper>
          <Product />
        </ProductWrapper>
      </MainWrapper>
    </PageTemplate>
  )
}

export default ProductPage