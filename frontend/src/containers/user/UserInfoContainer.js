import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserInfo from 'components/user/UserInfo'
import * as authActions from 'store/modules/auth'
import * as userActions from 'store/modules/user'
import * as baseActions from 'store/modules/base'

import { withRouter } from 'react-router'

class UserInfoContainer extends Component {
  state = {
    showEdit: false
  }

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
      // 클라이언트 수정된 유저 정보 업데이트
      await UserActions.getUserInfo()
    } catch (e) {
      const { error, BaseActions } = this.props
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: error
      })
    }
  }

  handleShowModal = (modalName) => {
    const { BaseActions } = this.props
    BaseActions.showModal(modalName)
  }

  handleShowEdit = () => {
    this.setState({
      showEdit: !this.state.showEdit
    })
  }

  handleChangeInput = (e) => {
    const { UserActions } = this.props
    const { name, value } = e.target
    
    UserActions.changeInputEdit({ name, value })
  }

  render () {
    const { meta, editForm } = this.props
    const { showEdit } = this.state
    const {
      handleLogout,
      handleUploadPhoto,
      handleShowModal,
      handleShowEdit,
      handleChangeInput
    } = this

    return (
      <UserInfo
        meta={meta}
        showEdit={showEdit}
        editForm={editForm}
        onLogout={handleLogout}
        onUploadPhoto={handleUploadPhoto}
        onShowModal={handleShowModal}
        onShowEdit={handleShowEdit}
        onChangeInput={handleChangeInput}
      />
    )
  }
}

export default connect(
  (state) => ({
    meta: state.user.get('meta'),
    result: state.user.get('result'),
    error: state.user.get('error'),
    editForm: state.user.get('editForm')
  }),
  (dispatch) => ({
    UserActions: bindActionCreators(userActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(withRouter(UserInfoContainer))