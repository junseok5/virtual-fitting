import React, { Component } from 'react'
import SellerInfo from 'components/seller/SellerInfo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'store/modules/base'
import * as authActions from 'store/modules/auth'
import * as sellerActions from 'store/modules/seller'

import { withRouter } from 'react-router'

class SellerInfoContainer extends Component {
  state = {
    showEdit: false
  }

  handleSellerInfo = async () => {
    const { SellerActions } = this.props
    await SellerActions.getSellerInfo()

    const { meta, history } = this.props
    if (!meta) history.push('/')
  }

  componentWillMount () {
    this.handleSellerInfo()
  }

  handleLogout = async () => {
    const { AuthActions, SellerActions, history } = this.props
    await AuthActions.logout()

    localStorage.logged = null
    SellerActions.initialize()
    history.push('/')
  }

  handleShowModal = (modalName) => {
    const { BaseActions } = this.props
    BaseActions.showModal(modalName)
  }

  handleShowEdit = () => {
    this.setState({
      showEdit: !this.state.showEdit
    })
  }

  handleChangeInput = (e) => {
    const { SellerActions } = this.props
    const { name, value } = e.target

    SellerActions.changeInputEdit({ name, value })
  }

  handleInitialInput = (data) => {
    const { SellerActions } = this.props
    SellerActions.changeInputEdit({ ...data })
  }

  handlePatchSellerInfo = async () => {
    const { SellerActions, BaseActions, editForm } = this.props

    const {
      companyName,
      managerName,
      contact
    } = editForm.toJS()

    console.log(companyName, managerName, contact)

    if (!companyName || !managerName || !contact) {
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: '잘못된 입력 값입니다.'
      })
      return
    }

    const patchData = {
      companyName, managerName, contact
    }

    try {
      await SellerActions.patchSellerInfo({
        ...patchData
      })

      const { result } = this.props

      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: result
      })

      await SellerActions.getSellerInfo()
      this.handleShowEdit()
    } catch (e) {
      const { error } = this.props

      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: error
      })
    }
  }

  render () {
    const { meta, editForm } = this.props
    const { showEdit } = this.state
    const {
      handleLogout,
      handleShowModal,
      handleShowEdit,
      handleChangeInput,
      handleInitialInput,
      handlePatchSellerInfo
    } = this

    return (
      <SellerInfo
        meta={meta}
        showEdit={showEdit}
        editForm={editForm}
        onLogout={handleLogout}
        onShowModal={handleShowModal}
        onShowEdit={handleShowEdit}
        onChangeInput={handleChangeInput}
        onInitialInput={handleInitialInput}
        onPatchSellerInfo={handlePatchSellerInfo}
      />
    )
  }
}

export default connect(
  (state) => ({
    meta: state.seller.get('meta'),
    result: state.seller.get('result'),
    error: state.seller.get('error'),
    editForm: state.seller.get('editForm')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    SellerActions: bindActionCreators(sellerActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(withRouter(SellerInfoContainer))