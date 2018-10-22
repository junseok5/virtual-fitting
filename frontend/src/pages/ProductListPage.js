import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainWrapper from 'components/common/MainWrapper'
import CategoryContainer from 'containers/common/CategoryContainer'
import ProductListWrapper from 'components/list/ProductListWrapper'
import ProductList from 'components/list/ProductList'
import Pagination from 'components/list/Pagination'

const ProductListPage = () => {
  return (
    <PageTemplate>
      <MainWrapper>
        <CategoryContainer />
        <ProductListWrapper>
          <ProductList />
          <Pagination />
        </ProductListWrapper>
      </MainWrapper>
    </PageTemplate>
  )
}

export default ProductListPage