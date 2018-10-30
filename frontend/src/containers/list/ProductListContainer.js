import React, { Component } from 'react'
import ProductList from 'components/list/ProductList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from 'store/modules/list'

import Pagination from 'components/list/Pagination'

class ProductListContainer extends Component {
  getProductList = () => {
    const { page, category, keyword, sellerId, ListActions } = this.props
    console.log(page, category, keyword, sellerId)
    ListActions.getProductList({ page, category, keyword, sellerId })
  }

  componentDidMount () {
    this.getProductList()
  }

  componentDidUpdate (prevProps, prevState) {
    // 페이지, 카테고리, 키워드가 바뀔 때 다시 불러온다.
    if (prevProps.page !== this.props.page ||
      prevProps.category !== this.props.category ||
      prevProps.keyword !== this.props.keyword) {
        this.getProductList()
        // 스크롤바 맨 위로 올리기
        document.documentElement.scrollTop = 0
      }
  }

  render () {
    const {
      loading,
      products,
      page,
      lastPage,
      category,
      keyword,
      sellerId
    } = this.props

    if (loading) return null

    return (
      <div>
        <ProductList products={products} />
        <Pagination
          page={page}
          lastPage={lastPage}
          category={category}
          keyword={keyword}
          sellerId={sellerId}
        />
      </div>
    )
  }
}

export default connect(
  (state) => ({
    products: state.list.get('products'),
    lastPage: state.list.get('lastPage'),
    loading: state.pender.pending['list/GET_PRODUCT_LIST']
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(ProductListContainer)