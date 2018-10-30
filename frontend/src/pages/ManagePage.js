import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import ProductListWrapper from 'components/list/ProductListWrapper'
import ProductAddBtn from 'components/product/ProductAddBtn'
import ProductListContainer from 'containers/list/ProductListContainer'
import Base from 'containers/common/Base'

const ManagePage = ({ match }) => {
  // page의 기본 값 1로 설정
  const { page = 1, sellerId } = match.params

  return (
    <PageTemplate>
      <Base />
      <ProductListWrapper>
        <ProductAddBtn />
        <ProductListContainer
          page={parseInt(page, 10)}
          sellerId={sellerId}
        />
      </ProductListWrapper>
    </PageTemplate>
  )
}

export default ManagePage