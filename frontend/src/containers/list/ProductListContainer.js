import React, { Component } from 'react'
import ProductList from 'components/list/ProductList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from 'store/modules/list'

class ProductListContainer extends Component {
  getProductList = () => {
    const { page, category, keyword, sellerId, ListActions } = this.props
    console.log(page, category, keyword, sellerId)
    ListActions.getProductList({ page, category, keyword, sellerId })
  }

  componentDidMount () {
    this.getProductList()
  }

  render () {
    return (
      <ProductList />
    )
  }
}

export default connect(
  (state) => ({
    products: state.list.get('products'),
    lastPage: state.list.get('lastPage')
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(ProductListContainer)