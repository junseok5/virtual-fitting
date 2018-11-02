import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainTemplate from 'components/common/MainTemplate'
import ProductEditContainer from 'containers/product/ProductEditContainer'
import Base from 'containers/common/Base'

const ProductEditPage = ({ match }) => {
  const { id } = match.params

  return (
    <PageTemplate>
      <MainTemplate>
        <ProductEditContainer
          id={id}
        />
        <Base />
      </MainTemplate>
    </PageTemplate>
  )
}

export default ProductEditPage