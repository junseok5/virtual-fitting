import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'store/modules/base'
import ErrorMessageModal from 'components/modal/ErrorMessageModal'

class ErrorMessageModalContainer extends Component {
  handleCancel= () => {
    const { BaseActions } = this.props
    BaseActions.hideModal('error')
  }

  render () {
    const { visible } = this.props
    const { handleCancel } = this

    return (
      <ErrorMessageModal
        visible={visible}
        onCancel={handleCancel}
      />
    )
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'error'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ErrorMessageModalContainer)