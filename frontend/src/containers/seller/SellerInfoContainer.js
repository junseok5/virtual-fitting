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
    showEdit: false,
    initEdit: true
  }

  componentWillMount () {
    const { BaseActions } = this.props

    BaseActions.initialize()
    BaseActions.setProgress({
      name: 'completed',
      value: 20
    })
    this.handleUserInfo()
  }

  componentWillReceiveProps () {
    const { BaseActions } = this.props
    BaseActions.setProgress({
      name: 'completed',
      value: 30
    })
  }

  shouldComponentUpdate () {
    const { BaseActions } = this.props
    BaseActions.setProgress({
      name: 'completed',
      value: 50
    })
    return true
  }

  componentWillUpdate () {
    const { BaseActions } = this.props
    BaseActions.setProgress({
      name: 'completed',
      value: 80
    })
  }

  componentDidUpdate (prevProps, prevState) {
    this.handleCompletedLoading()
  }

  handleCompletedLoading = () => {
    const { BaseActions } = this.props
    BaseActions.setProgress({
      name: 'completed',
      value: 100
    })
    setTimeout(() => {
      BaseActions.setProgress({
        name: 'visible',
        value: false
      })
    }, 200)
  }

  handleSellerInfo = async () => {
    const { SellerActions } = this.props
    await SellerActions.getSellerInfo()

    const { meta, history } = this.props
    if (!meta) history.push('/')
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

  handleInitEdit = (patch) => {
    const { SellerActions } = this.props
    const { name, value } = patch
    this.setState({
      initEdit: false
    })

    SellerActions.changeInputEdit({ name, value })
  }

  handlePatchSellerInfo = async () => {
    const { SellerActions, BaseActions, editForm } = this.props

    const {
      companyName,
      managerName,
      contact
    } = editForm.toJS()

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
    const { meta, editForm, BaseActions, loading } = this.props
    
    if (loading) {
      BaseActions.setProgress({
        name: 'completed',
        value: 30
      })
      return null
    }
    
    const { showEdit, initEdit } = this.state
    const {
      handleLogout,
      handleShowModal,
      handleShowEdit,
      handleChangeInput,
      handlePatchSellerInfo,
      handleInitEdit
    } = this

    return (
      <SellerInfo
        meta={meta}
        showEdit={showEdit}
        editForm={editForm}
        initEdit={initEdit}
        onLogout={handleLogout}
        onShowModal={handleShowModal}
        onShowEdit={handleShowEdit}
        onChangeInput={handleChangeInput}
        onPatchSellerInfo={handlePatchSellerInfo}
        onInitEdit={handleInitEdit}
      />
    )
  }
}

export default connect(
  (state) => ({
    meta: state.seller.get('meta'),
    result: state.seller.get('result'),
    error: state.seller.get('error'),
    editForm: state.seller.get('editForm'),
    loading: state.pender.pending['seller/GET_SELLER_INFO']
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    SellerActions: bindActionCreators(sellerActions, dispatch),
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(withRouter(SellerInfoContainer))