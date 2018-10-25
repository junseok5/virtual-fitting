import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserInfo from 'components/user/UserInfo'
import * as authActions from 'store/modules/auth'
import * as userActions from 'store/modules/user'

import { withRouter } from 'react-router'

class UserInfoContainer extends Component {

  handleUserInfo = async () => {
    const { UserActions } = this.props
    await UserActions.getUserInfo()

    const { meta, history } = this.props
    // 로그인되어 있지 않으면 메인화면으로 이동
    if (!meta) history.push('/')
  }

  componentWillMount () {
    this.handleUserInfo()
  }

  handleLogout = async () => {
    const { AuthActions, UserActions, history } = this.props
    await AuthActions.logout()

    localStorage.logged = null
    UserActions.initialize()
    history.push('/')
  }

  render () {
    const { meta } = this.props
    const { handleLogout } = this

    return (
      <UserInfo
        meta={meta}
        onLogout={handleLogout}
      />
    )
  }
}

export default connect(
  (state) => ({
    meta: state.user.get('meta')
  }),
  (dispatch) => ({
    UserActions: bindActionCreators(userActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(withRouter(UserInfoContainer))