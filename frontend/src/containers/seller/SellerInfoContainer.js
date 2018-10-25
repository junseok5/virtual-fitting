import React, { Component } from 'react'
import SellerInfo from 'components/seller/SellerInfo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sellerActions from 'store/modules/seller'

import { withRouter } from 'react-router'

class SellerInfoContainer extends Component {

  handleSellerInfo = async () => {
    const { SellerActions } = this.props
    await SellerActions.getSellerInfo()

    const { meta, history } = this.props
    if (!meta) history.push('/')
  }

  componentWillMount () {
    this.handleSellerInfo()
  }

  render () {
    const { meta } = this.props
    
    return (
      <SellerInfo
        meta={meta}
      />
    )
  }
}

export default connect(
  (state) => ({
    meta: state.seller.get('meta')
  }),
  (dispatch) => ({
    SellerActions: bindActionCreators(sellerActions, dispatch)
  })
)(withRouter(SellerInfoContainer))