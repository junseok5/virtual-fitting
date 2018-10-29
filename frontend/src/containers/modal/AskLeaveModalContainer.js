import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'store/modules/base'
import * as userActions from 'store/modules/user'
import AskLeaveModal from 'components/modal/AskLeaveModal'

import { withRouter } from 'react-router'

class AskLeaveModalContainer extends Component {
  handleCancel = () => {
    const { BaseActions } = this.props
    BaseActions.hideModal('leave')
  }

  handleConfirm = async () => {
    // 회원 탈퇴
    const { BaseActions, UserActions } = this.props

    try {
      await UserActions.deleteUserInfo()

      const { result, history } = this.props

      BaseActions.hideModal('leave')

      localStorage.logged = null
      await UserActions.initialize()

      history.push('/')
      
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: result
      })
    } catch (e) {
      const { error } = this.props

      BaseActions.hideModal('leave')
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: error
      })
    }
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
    visible: state.base.getIn(['modal', 'leave']),
    result: state.user.get('result'),
    error: state.user.get('error')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(withRouter(AskLeaveModalContainer))