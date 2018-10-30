import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import ProductEditContainer from 'containers/product/ProductEditContainer'
import Base from 'containers/common/Base'

const ProductWritePage = () => {
  return (
    <PageTemplate>
      <MainTemplate>
        <ProductEditContainer />
        <Base />
      </MainTemplate>
    </PageTemplate>
  )
}

export default ProductWritePage