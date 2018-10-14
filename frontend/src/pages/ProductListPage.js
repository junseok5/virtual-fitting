import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainWrapper from 'components/common/MainWrapper'
import Category from 'components/common/Category'

const ProductListPage = () => {
  return (
    <PageTemplate>
      <MainWrapper>
        <Category />
      </MainWrapper>
    </PageTemplate>
  )
}

export default ProductListPage