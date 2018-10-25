import React, { Component } from 'react'
import SellerInfo from 'components/seller/SellerInfo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from 'store/modules/auth'
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

  handleLogout = async () => {
    const { AuthActions, SellerActions, history } = this.props
    await AuthActions.logout()

    localStorage.logged = null
    SellerActions.initialize()
    history.push('/')
  }

  render () {
    const { meta } = this.props
    const { handleLogout } = this

    return (
      <SellerInfo
        meta={meta}
        onLogout={handleLogout}
      />
    )
  }
}

export default connect(
  (state) => ({
    meta: state.seller.get('meta')
  }),
  (dispatch) => ({
    SellerActions: bindActionCreators(sellerActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(withRouter(SellerInfoContainer))