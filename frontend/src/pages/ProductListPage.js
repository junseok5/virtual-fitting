import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainWrapper from 'components/common/MainWrapper'
import Category from 'components/common/Category'
import ProductListWrapper from 'components/list/ProductListWrapper'
import ProductList from 'components/list/ProductList'
import Pagination from 'components/list/Pagination'

const ProductListPage = () => {
  return (
    <PageTemplate>
      <MainWrapper>
        <Category />
        <ProductListWrapper>
          <ProductList />
          <Pagination />
        </ProductListWrapper>
      </MainWrapper>
    </PageTemplate>
  )
}

export default ProductListPage