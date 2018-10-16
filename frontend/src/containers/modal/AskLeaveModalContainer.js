import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'store/modules/base'
import AskLeaveModal from 'components/modal/AskLeaveModal'

class AskLeaveModalContainer extends Component {
  handleCancel = () => {
    const { BaseActions } = this.props
    BaseActions.hideModal('leave')
  }

  handleConfirm = async () => {
    // 서버로 회원 탈퇴 요청
  }

  render () {
    const { visible } = this.props
    const { handleCancel, handleConfirm } = this
    return (
      <AskLeaveModal
        visible={visible}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    )
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'leave'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(AskLeaveModalContainer)