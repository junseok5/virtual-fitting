import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainWrapper from 'components/common/MainWrapper'
import Category from 'components/common/Category'
import ProductListWrapper from 'components/list/ProductListWrapper'
import ProductList from 'components/list/ProductList'

const ProductListPage = () => {
  return (
    <PageTemplate>
      <MainWrapper>
        <Category />
        <ProductListWrapper>
          <ProductList />
        </ProductListWrapper>
      </MainWrapper>
    </PageTemplate>
  )
}

export default ProductListPage