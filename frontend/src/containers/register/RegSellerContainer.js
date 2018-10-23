import React, { Component } from 'react'
import RegSeller from 'components/register/RegSeller'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as registerActions from 'store/modules/register'

class RegSellerContainer extends Component {
  handleChangeInput = (e) => {
    const { RegisterActions } = this.props
    const { name, value } = e.target

    RegisterActions.changeInputSeller({ name, value })
  }

  render () {
    const { form } = this.props
    const { handleChangeInput } = this

    return (
      <RegSeller
        forms={form}
        onChangeInput={handleChangeInput}
      />
    )
  }
}

export default connect(
  (state) => ({
    form: state.register.get('sellerForm')
  }),
  (dispatch) => ({
    RegisterActions: bindActionCreators(registerActions, dispatch)
  })
)(RegSellerContainer)