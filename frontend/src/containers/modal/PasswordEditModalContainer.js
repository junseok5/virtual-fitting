import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'store/modules/base'
import PasswordEditModal from 'components/modal/PasswordEditModal'

class PasswordEditModalContainer extends Component {
  handleCancel = () => {
    const { BaseActions } = this.props
    BaseActions.hideModal('password')
  }

  handleConfirm = async () => {
    // 서버로 패스워드 변경 요청
  }

  render () {
    const { visible } = this.props
    const { handleCancel, handleConfirm } = this

    return (
      <PasswordEditModal
        visible={visible}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    )
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'password'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(PasswordEditModalContainer)