import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from 'store/modules/auth'
import * as userActions from 'store/modules/user'
import * as sellerActions from 'store/modules/seller'

import AskLeaveModalContainer from 'containers/modal/AskLeaveModalContainer'
import AskRemoveModalContainer from 'containers/modal/AskRemoveModalContainer'
import ErrorMessageModalContainer from 'containers/modal/ErrorMessageModalContainer'
import PasswordEditModalContainer from 'containers/modal/PasswordEditModalContainer'
import ProgressbarContainer from 'containers/common/ProgressbarContainer'

class Base extends Component {

  initialize = async () => {
    /*
      localStorage.logged가 user인지 seller인지에 따라
      서버에 로그인 check 요청

      요청에 따른 리덕스 로그인 상태 다시 설정
    */
   const { AuthActions } = this.props
   AuthActions.initialize()

    if (localStorage.logged === 'user') {
      await AuthActions.loginCheckUser()

      const { loginResult, UserActions } = this.props
      loginResult && UserActions.setUser(loginResult)
    } else if (localStorage.logged === 'seller') {
      await AuthActions.loginCheckSeller()

      const { loginResult, SellerActions } = this.props
      loginResult && SellerActions.setSeller(loginResult)
    }
  }

  componentDidMount () {
    this.initialize()
  }

  render () {
    const { completed } = this.props

    return (
      <div>
        <ProgressbarContainer />
        <AskLeaveModalContainer />
        <AskRemoveModalContainer />
        <ErrorMessageModalContainer />
        <PasswordEditModalContainer />
      </div>
    )
  }
}

export default connect(
  (state) => ({
    loginResult: state.auth.get('loginResult')
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch),
    SellerActions: bindActionCreators(sellerActions, dispatch)
  })
)(Base)