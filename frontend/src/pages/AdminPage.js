import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import ProductListWrapper from 'components/list/ProductListWrapper'
import ProductList from 'components/list/ProductList'
import Pagination from 'components/list/Pagination'

const AdminPage = () => {
  return (
    <PageTemplate>
      <ProductListWrapper>
        <ProductList />
        <Pagination />
      </ProductListWrapper>
    </PageTemplate>
  )
}

export default AdminPage