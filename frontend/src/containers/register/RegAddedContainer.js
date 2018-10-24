import React, { Component } from 'react'
import RegAdded from 'components/register/RegAdded'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as registerActions from 'store/modules/register'
import * as userActions from 'store/modules/user'
import * as baseActions from 'store/modules/base'

import { withRouter } from 'react-router'
import regex from 'lib/regex'

class RegAddedContainer extends Component {

  componentDidMount () {
    const { RegisterActions } = this.props
    RegisterActions.initialize()
  }

  handleChangeInput = (e) => {
    const { RegisterActions } = this.props
    const { name, value } = e.target

    RegisterActions.changeInputSocialAdded({ name, value })
  }

  handleRegister = async () => {
    const {
      RegisterActions,
      UserActions,
      BaseActions,
      form
    } = this.props

    const {
      displayName,
      phoneNum,
      gender
    } = form.toJS()

    // validation
    if (!regex.displayName.test(displayName)) {
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: '잘못된 이름 형식입니다.'
      })
      return
    } else if (!regex.phoneNum.test(phoneNum)) {
      BaseActions.setModalMessage({
        modalName: 'error',
        modalMessage: '잘못된 폰 번호 형식입니다.'
      })
      return
    }

    const { socialInfo } = this.props
    const { accessToken, provider } = socialInfo.toJS()

    try {
      await RegisterActions.socialRegister({
        displayName,
        phoneNum,
        gender,
        provider,
        accessToken
      })

      const { result } = this.props
      UserActions.setUser(result)

      const { history } = this.props
      history.push('/')
    } catch (e) {
      const { error } = this.props
      if (error) {
        BaseActions.setModalMessage({
          modalName: 'error',
          modalMessage: error
        })
      }
    }
  }

  render () {
    // 소셜 로그인 없이 그냥 페이지 접속 시, 렌더링 취소
    if (!this.props.socialInfo) return

    const { form } = this.props
    const {
      handleChangeInput,
      handleRegister
    } = this

    return (
      <RegAdded
        forms={form}
        onChangeInput={handleChangeInput}
        onRegister={handleRegister}
      />
    )
  }
}

export default connect(
  (state) => ({
    form: state.register.get('socialAddedForm'),
    socialInfo: state.auth.get('socialInfo')
  }),
  (dispatch) => ({
    RegisterActions: bindActionCreators(registerActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(withRouter(RegAddedContainer))