import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import ProductEdit from 'components/product/ProductEdit'

const ProductEditPage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <ProductEdit />
      </MainTemplate>
    </PageTemplate>
  )
}

export default ProductEditPage