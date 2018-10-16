import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import ProductListWrapper from 'components/list/ProductListWrapper'
import ProductAddBtn from 'components/product/ProductAddBtn'
import ProductList from 'components/list/ProductList'
import Pagination from 'components/list/Pagination'

const SellerPage = () => {
  return (
    <PageTemplate>
      <ProductListWrapper>
        <ProductAddBtn />
        <ProductList />
        <Pagination />
      </ProductListWrapper>
    </PageTemplate>
  )
}

export default SellerPage