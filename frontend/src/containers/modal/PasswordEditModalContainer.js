import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'store/modules/base'
import * as userActions from 'store/modules/user'
import * as sellerActions from 'store/modules/seller'
import * as authActions from 'store/modules/auth'
import PasswordEditModal from 'components/modal/PasswordEditModal'

import { withRouter } from 'react-router'

import regex from 'lib/regex'

class PasswordEditModalContainer extends Component {

  componentDidMount () {
    const { BaseActions } = this.props
    BaseActions.initialize()
  }

  handleChangeInput = (e) => {
    const { BaseActions } = this.props
    const { name, value } = e.target

    BaseActions.changeInputModalPassword({ name, value })
  }

  handleCancel = () => {
    const { BaseActions } = this.props
    BaseActions.hideModal('password')
  }

  handleConfirm = async () => {
    const logged = localStorage.logged
    const { BaseActions } = this.props

    if (!logged) {
      await this.handleLogout()
      return
    }

    if (logged === 'user') {
      this.editPasswordUser()
    } else if (logged === 'seller') {
      this.editPasswordSeller()
    } else {
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: '오류 발생!'
      })

      this.handleLogout()
    }
  }

  handleLogout = async () => {
    const {
      AuthActions,
      BaseActions,
      SellerActions,
      history
    } = this.props
    
    try {
      await AuthActions.logout()

      localStorage.logged = null
      SellerActions.initialize()
      history.push('/')
    } catch (e) {
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: '로그아웃 실패!'
      })
    }
  }

  editPasswordUser = async () => {
    const { UserActions, BaseActions, form } = this.props
    const {
      passwordBefore,
      passwordNew1,
      passwordNew2
    } = form.toJS()

    if (!regex.password.test(passwordBefore)
    || !regex.password.test(passwordNew1)
    || !regex.password.test(passwordNew2)) {
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: '비밀번호는 6자 이상 30자 이하입니다.'
      })
      return
    }

    if (passwordNew1 !== passwordNew2) {
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: '새 비밀번호가 일치하지 않습니다.'
      })
      return
    }

    try {
      await UserActions.patchUserPassword({
        passwordBefore,
        passwordNew1,
        passwordNew2
      })

      const { resultUser } = this.props
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: resultUser
      })
      BaseActions.hideModal('password')
    } catch (e) {
      const { errorUser } = this.props

      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: errorUser
      })
    }
  }

  editPasswordSeller = async () => {
    const { SellerActions, BaseActions, form } = this.props
    const {
      passwordBefore,
      passwordNew1,
      passwordNew2
    } = form.toJS()

    if (!regex.password.test(passwordBefore)
    || !regex.password.test(passwordNew1)
    || !regex.password.test(passwordNew2)) {
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: '비밀번호는 6자 이상 30자 이하입니다.'
      })
      return
    }

    if (passwordNew1 !== passwordNew2) {
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: '새 비밀번호가 일치하지 않습니다.'
      })
      return
    }

    try {
      await SellerActions.patchSellerPassword({
        passwordBefore,
        passwordNew1,
        passwordNew2
      })

      const { resultSeller } = this.props
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: resultSeller
      })
      BaseActions.hideModal('password')
    } catch (e) {
      const { errorSeller } = this.props

      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: errorSeller
      })
    }
  }

  render () {
    const { visible, form } = this.props
    const { handleChangeInput, handleCancel, handleConfirm } = this

    return (
      <PasswordEditModal
        visible={visible}
        forms={form}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        onChangeInput={handleChangeInput}
      />
    )
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'password']),
    form: state.base.get('modalPasswordForm'),
    resultUser: state.user.get('result'),
    errorUser: state.user.get('error'),
    resultSeller: state.seller.get('result'),
    errorSeller: state.seller.get('error')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch),
    SellerActions: bindActionCreators(sellerActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(withRouter(PasswordEditModalContainer))