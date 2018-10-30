import React from 'react'
import PageTemplate from 'components/common/PageTemplate'
import MainWrapper from 'components/common/MainWrapper'
import CategoryContainer from 'containers/common/CategoryContainer'
import ProductListWrapper from 'components/list/ProductListWrapper'
import ProductListContainer from 'containers/list/ProductListContainer'
import Pagination from 'components/list/Pagination'
import Base from 'containers/common/Base'

const ProductListPage = ({ match }) => {
  // page의 기본 값 1로 설정
  const { page = 1, category, keyword } = match.params

  return (
    <PageTemplate>
      <MainWrapper>
        <CategoryContainer />
        <ProductListWrapper>
          <ProductListContainer
            page={parseInt(page, 10)}
            category={category}
            keyword={keyword}
          />
          <Pagination />
        </ProductListWrapper>
        <Base />
      </MainWrapper>
    </PageTemplate>
  )
}

export default ProductListPage