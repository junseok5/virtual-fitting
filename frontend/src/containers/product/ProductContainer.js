import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Product from 'components/product/Product'
import * as baseActions from 'store/modules/base'
import * as productActions from 'store/modules/product'

class ProductContainer extends Component {

  componentWillMount () {
    const { BaseActions } = this.props

    BaseActions.initialize()
    BaseActions.setProgress({
      name: 'completed',
      value: 20
    })
    this.handleProductInfo()
  }

  componentWillReceiveProps () {
    const { BaseActions } = this.props
    BaseActions.setProgress({
      name: 'completed',
      value: 30
    })
  }

  shouldComponentUpdate () {
    const { BaseActions } = this.props
    BaseActions.setProgress({
      name: 'completed',
      value: 50
    })

    return true
  }

  componentWillUpdate () {
    const { BaseActions } = this.props
    BaseActions.setProgress({
      name: 'completed',
      value: 80
    })
  }

  componentDidUpdate () {
    const { BaseActions } = this.props
    BaseActions.setProgress({
      name: 'completed',
      value: 100
    })
    document.documentElement.scrollTop = 0
    setTimeout(() => {
      BaseActions.setProgress({
        name: 'visible',
        value: false
      }, 200)
    })
  }

  handleProductInfo = async () => {
    const { ProductActions, id } = this.props

    try {
      await ProductActions.getProduct(id)
    } catch (e) {

    }
  }

  render () {
    const { loading } = this.props

    if (loading) return null

    const { product } = this.props

    return (
      <Product
        product={product}
      />
    )
  }
}

export default connect(
  (state) => ({
    product: state.product.get('product'),
    loading: state.pender.pending['product/GET_PRODUCT']
  }),
  (dispatch) => ({
    ProductActions: bindActionCreators(productActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ProductContainer)