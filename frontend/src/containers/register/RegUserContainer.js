import React, { Component } from 'react'
import RegUser from 'components/register/RegUser'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as registerActions from 'store/modules/register'
import * as userActions from 'store/modules/user'
import * as baseActions from 'store/modules/base'

import { withRouter } from 'react-router'

class RegUserContainer extends Component {
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

    RegisterActions.setResult(null)
    RegisterActions.setError(null)
    UserActions.setUser(null)

    const {
      crn,
      companyName,
      email,
      password,
      managerName,
      contact
    } = form.toJS()

    try {
      await RegisterActions.localRegisterUser({
        crn,
        companyName,
        email,
        password,
        managerName,
        contact
      })

      const { error } = this.props
      if (error) {
        BaseActions.setModalMessage(error)
        BaseActions.showModal('error')
        return
      }

      const { result } = this.props
      UserActions.setUser(result)

      const { history } = this.props
      history.push('/')
    } catch (e) {
      console.log(e)
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