import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'store/modules/base'
import * as userActions from 'store/modules/user'
import * as sellerActions from 'store/modules/seller'
import * as authActions from 'store/modules/auth'
import AskLeaveModal from 'components/modal/AskLeaveModal'

import { withRouter } from 'react-router'

class AskLeaveModalContainer extends Component {
  handleCancel = () => {
    const { BaseActions } = this.props
    BaseActions.hideModal('leave')
  }

  handleConfirm = async () => {
    const logged = localStorage.logged
    const { BaseActions } = this.props

    if (!logged) {
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: '오류 발생!'
      })

      const { AuthActions, UserActions, history } = this.props
      await AuthActions.logout()
  
      localStorage.logged = null
      UserActions.initialize()
      history.push('/')
      return
    }

    if (logged === 'user') {
      this.leaveUser()
    } else if (logged === 'seller') {
      this.leaveSeller()
    } else {
      // localStorage 값이 임의로 조작되었을 시
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: '오류 발생!'
      })

      const { AuthActions, UserActions, history } = this.props
      await AuthActions.logout()
  
      localStorage.logged = null
      UserActions.initialize()
      history.push('/')
    }
  }

  leaveUser = async () => {
    // 사용자 회원 탈퇴
    const { BaseActions, UserActions } = this.props

    try {
      await UserActions.deleteUserInfo()

      const { resultUser, history } = this.props

      BaseActions.hideModal('leave')

      localStorage.logged = null
      await UserActions.initialize()

      history.push('/')

      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: resultUser
      })
    } catch (e) {
      const { errorUser } = this.props

      BaseActions.hideModal('leave')
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: errorUser
      })
    }
  }

  leaveSeller = async () => {
    // 판매자 회원 탈퇴
    const { BaseActions, SellerActions } = this.props

    try {
      await SellerActions.deleteSellerInfo()

      const { resultSeller, history } = this.props

      BaseActions.hideModal('leave')

      localStorage.logged = null
      await SellerActions.initialize()

      history.push('/')

      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: resultSeller
      })
    } catch (e) {
      const { errorSeller } = this.props

      BaseActions.hideModal('leave')
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: errorSeller
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
    resultUser: state.user.get('result'),
    errorUser: state.user.get('error'),
    resultSeller: state.seller.get('result'),
    errorSeller: state.seller.get('error')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch),
    SellerActions: bindActionCreators(sellerActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(withRouter(AskLeaveModalContainer))