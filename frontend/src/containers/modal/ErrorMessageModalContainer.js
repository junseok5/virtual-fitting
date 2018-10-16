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
    const { visible, modalMessage } = this.props
    const { handleCancel } = this

    return (
      <ErrorMessageModal
        visible={visible}
        onCancel={handleCancel}
        message={modalMessage}
      />
    )
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'error']),
    modalMessage: state.base.get('modalMessage')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(ErrorMessageModalContainer)