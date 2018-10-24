import React, { Component } from 'react'
import RegUser from 'components/register/RegUser'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as registerActions from 'store/modules/register'
import * as userActions from 'store/modules/user'
import * as baseActions from 'store/modules/base'

import { withRouter } from 'react-router'
import regex from 'lib/regex'

class RegUserContainer extends Component {

  componentDidMount () {
    const { RegisterActions } = this.props
    RegisterActions.initialize()
  }

  handleChangeInput = (e) => {
    const { RegisterActions } = this.props
    const { name, value } = e.target

    RegisterActions.changeInputUser({ name, value })
  }

  handleRegister = async () => {
    const {
      RegisterActions,
      UserActions,
      BaseActions,
      form
    } = this.props

    const {
      email,
      password,
      displayName,
      phoneNum,
      gender
    } = form.toJS()

    // validation
    if (!regex.email.test(email)) {
      BaseActions.setModalMessage('잘못된 이메일 형식입니다.')
      BaseActions.showModal('error')
      return
    } else if (!regex.password.test(password)) {
      BaseActions.setModalMessage('비밀번호는 6자 이상 30자 이하입니다.')
      BaseActions.showModal('error')
      return
    } else if (!regex.displayName.test(displayName)) {
      BaseActions.setModalMessage('잘못된 이름 형식입니다.')
      BaseActions.showModal('error')
      return
    } else if (!regex.phoneNum.test(phoneNum)) {
      BaseActions.setModalMessage('잘못된 폰 번호 형식입니다.')
      BaseActions.showModal('error')
      return
    }

    try {
      await RegisterActions.localRegisterUser({
        email,
        password,
        displayName,
        phoneNum,
        gender
      })

      const { result } = this.props
      UserActions.setUser(result)

      const { history } = this.props
      history.push('/')
    } catch (e) {
      const { error } = this.props
      if (error) {
        // 에러 모달
        BaseActions.setModalMessage(error)
        BaseActions.showModal('error')
        return
      }
    }
  }

  render () {
    const { form } = this.props
    const {
      handleChangeInput,
      handleRegister
    } = this
    
    return (
      <RegUser
        forms={form}
        onChangeInput={handleChangeInput}
        onRegister={handleRegister}
      />
    )
  }
}

export default connect(
  (state) => ({
    form: state.register.get('userForm'),
    result: state.register.get('result'),
    error: state.register.get('error')
  }),
  (dispatch) => ({
    RegisterActions: bindActionCreators(registerActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(withRouter(RegUserContainer))