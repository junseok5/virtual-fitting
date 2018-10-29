import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'store/modules/base'
import AskRemoveModal from 'components/modal/AskRemoveModal'

class AskRemoveModalContainer extends Component {
  handleCancel = () => {
    const { BaseActions } = this.props
    BaseActions.hideModal('remove')
  }

  render () {
    const { visible } = this.props
    const { handleCancel, handleConfirm } = this

    return (
      <AskRemoveModal
        visible={visible}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    )
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'remove'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(AskRemoveModalContainer)