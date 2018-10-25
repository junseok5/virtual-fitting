import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserInfo from 'components/user/UserInfo'
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

  render () {
    const { meta } = this.props

    return (
      <UserInfo
        meta={meta}
      />
    )
  }
}

export default connect(
  (state) => ({
    meta: state.user.get('meta'),
    logged: state.user.get('logged')
  }),
  (dispatch) => ({
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(withRouter(UserInfoContainer))