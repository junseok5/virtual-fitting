import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserInfo from 'components/user/UserInfo'
import * as authActions from 'store/modules/auth'
import * as userActions from 'store/modules/user'
import * as baseActions from 'store/modules/base'

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

  handleUploadPhoto = async (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    if (!file) return

    const { UserActions } = this.props
    try {
      console.log(file)
      await UserActions.uploadPhoto({ file })

      const { result, BaseActions } = this.props
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: result
      })
      await UserActions.getUserInfo()
    } catch (e) {
      const { result, BaseActions } = this.props
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: result
      })
    }
  }

  render () {
    const { meta } = this.props
    const {
      handleLogout,
      handleUploadPhoto
    } = this

    return (
      <UserInfo
        meta={meta}
        onLogout={handleLogout}
        onUploadPhoto={handleUploadPhoto}
      />
    )
  }
}

export default connect(
  (state) => ({
    meta: state.user.get('meta'),
    result: state.user.get('result')
  }),
  (dispatch) => ({
    UserActions: bindActionCreators(userActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(withRouter(UserInfoContainer))