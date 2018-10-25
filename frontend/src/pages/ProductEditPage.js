import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import ProductEdit from 'components/product/ProductEdit'
import Base from 'containers/common/Base'

const ProductEditPage = () => {
  return (
    <PageTemplate>
      <Base />
      <MainTemplate>
        <ProductEdit />
      </MainTemplate>
    </PageTemplate>
  )
}

export default ProductEditPage