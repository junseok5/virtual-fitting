import React, { Component } from 'react'
import RegUser from 'components/register/RegUser'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as registerActions from 'store/modules/register'
import * as UserActions from 'store/modules/user'

class RegUserContainer extends Component {
  handleChangeInput = (e) => {
    const { RegisterActions } = this.props
    const { name, value } = e.target

    RegisterActions.changeInputUser({ name, value })
  }

  handleRegister = async () => {
    const { RegisterActions, UserActions, form } = this.props
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
      const { result } = this.props
      UserActions.setUser(result)
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    const { form } = this.props
    const { handleChangeInput } = this
    return (
      <RegUser
        forms={form}
        onChangeInput={handleChangeInput}
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
    UserActions: bindActionCreators(UserActions, dispatch)
  })
)(RegUserContainer)