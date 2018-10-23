import React, { Component } from 'react'
import LoginForm from 'components/login/LoginForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from 'store/modules/auth'

class LoginFormContainer extends Component {
  handleChangeInput = (e) => {
    const { AuthActions } = this.props
    const { name, value } = e.target

    AuthActions.changeInput({ name, value })
  }

  handleSelectLoginType = (type) => {
    const { AuthActions } = this.props
    AuthActions.selectLoginType(type)
  }

  render () {
    const { form, loginType } = this.props
    const {
      handleChangeInput,
      handleSelectLoginType
    } = this

    return (
      <LoginForm
        loginType={loginType}
        forms={form}
        onChangeInput={handleChangeInput}
        onSelectLoginType={handleSelectLoginType}
      />
    )
  }
}

export default connect(
  (state) => ({
    form: state.auth.get('form'),
    loginType: state.auth.get('loginType')
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(LoginFormContainer)