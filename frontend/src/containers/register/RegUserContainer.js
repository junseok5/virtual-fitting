import React, { Component } from 'react'
import RegUser from 'components/register/RegUser'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as registerActions from 'store/modules/register'

class RegUserContainer extends Component {
  handleChangeInput = (e) => {
    const { RegisterActions } = this.props
    const { name, value } = e.target

    RegisterActions.changeInputUser({ name, value })
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
    form: state.register.get('userForm')
  }),
  (dispatch) => ({
    RegisterActions: bindActionCreators(registerActions, dispatch)
  })
)(RegUserContainer)