import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'store/modules/base'
import * as userActions from 'store/modules/user'
import PasswordEditModal from 'components/modal/PasswordEditModal'

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
    // 서버로 패스워드 변경 요청
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

      const { result } = this.props
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: result
      })
      BaseActions.hideModal('password')
    } catch (e) {
      const { error } = this.props
      console.log(error)

      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: error
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
    result: state.user.get('result'),
    error: state.user.get('error')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(PasswordEditModalContainer)