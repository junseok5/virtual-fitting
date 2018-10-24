import React, { Component } from 'react'
import RegSeller from 'components/register/RegSeller'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as registerActions from 'store/modules/register'
import * as sellerActions from 'store/modules/seller'
import * as baseActions from 'store/modules/base'

import { withRouter } from 'react-router'
import regex from 'lib/regex'

class RegSellerContainer extends Component {

  componentDidMount () {
    const { RegisterActions } = this.props
    RegisterActions.initialize()
  }

  handleChangeInput = (e) => {
    const { RegisterActions } = this.props
    const { name, value } = e.target

    RegisterActions.changeInputSeller({ name, value })
  }

  handleRegister = async () => {
    const {
      RegisterActions,
      SellerActions,
      BaseActions,
      form
    } = this.props

    const {
      crn,
      companyName,
      email,
      password,
      managerName,
      contact
    } = form.toJS()

    // validation
    if (!regex.crn.test(crn)) {
      BaseActions.setModalMessage('잘못된 사업자등록번호 형식입니다.')
      BaseActions.showModal('error')
      return
    } else if (!regex.companyName.test(companyName)) {
      BaseActions.setModalMessage('잘못된 회사이름 형식입니다.')
      BaseActions.showModal('error')
      return
    } else if (!regex.email.test(email)) {
      BaseActions.setModalMessage('잘못된 이메일 형식입니다.')
      BaseActions.showModal('error')
      return
    } else if (!regex.password.test(password)) {
      BaseActions.setModalMessage('비밀번호는 6자 이상 30자 이하입니다.')
      BaseActions.showModal('error')
      return
    } else if (!regex.managerName.test(managerName)) {
      BaseActions.setModalMessage('잘못된 매니저 이름 형식입니다.')
      BaseActions.showModal('error')
      return
    } else if (!regex.contact.test(contact)) {
      BaseActions.setModalMessage('잘못된 연락처 형식입니다.')
      BaseActions.showModal('error')
      return
    }

    try {
      await RegisterActions.localRegisterSeller({
        crn,
        companyName,
        email,
        password,
        managerName,
        contact
      })

      const { result } = this.props
      SellerActions.setSeller(result)

      const { history } = this.props
      history.push('/')
    } catch (e) {
      const { error } = this.props
      if (error) {
        BaseActions.setModalMessage(error)
        BaseActions.showModal('error')
        return
      }
    }
  }

  render () {
    const { form } = this.props
    const {
      handleChangeInput,
      handleRegister
    } = this

    return (
      <RegSeller
        forms={form}
        onChangeInput={handleChangeInput}
        onRegister={handleRegister}
      />
    )
  }
}

export default connect(
  (state) => ({
    form: state.register.get('sellerForm'),
    result: state.register.get('result'),
    error: state.register.get('error')
  }),
  (dispatch) => ({
    RegisterActions: bindActionCreators(registerActions, dispatch),
    SellerActions: bindActionCreators(sellerActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(withRouter(RegSellerContainer))