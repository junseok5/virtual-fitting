import React, { Component } from 'react'
import RegAdded from 'components/register/RegAdded'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as registerActions from 'store/modules/register'

import { withRouter } from 'react-router'
import regex from 'lib/regex'

class RegAddedContainer extends Component {

  componentDidMount () {
    const { RegisterActions } = this.props
    RegisterActions.initialize()
  }

  handleChangeInput = (e) => {
    const { RegisterActions } = this.props
    const { name, value } = e.target

    RegisterActions.changeInputSocialAdded({ name, value })
  }

  render () {
    const { form } = this.props
    const {
      handleChangeInput
    } = this

    return (
      <RegAdded
        forms={form}
        onChangeInput={handleChangeInput}
      />
    )
  }
}

export default connect(
  (state) => ({
    form: state.register.get('socialAddedForm')
  }),
  (dispatch) => ({
    RegisterActions: bindActionCreators(registerActions, dispatch)
  })
)(withRouter(RegAddedContainer))