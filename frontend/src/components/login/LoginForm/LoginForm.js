import React from 'react'
import styles from './LoginForm.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import SocialLoginButton from 'components/login/SocialLoginButton'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

const cx = classNames.bind(styles)


const UserForm = ({
  loginType,
  forms,
  onChangeInput,
  onSelectLoginType,
  onLogin,
  onKeyPress,
  onSocialLogin
}) => {
  const {
    email,
    password
  } = forms.toJS()

  const selected = {
    user: loginType === 'user' && '_selected',
    seller: loginType === 'seller' && '_selected'
  }

  return (
    <div className={cx('user-form')}>
      <div className={cx('login-type')}>
        <div className={cx('_typebox', selected.user)} onClick={() => onSelectLoginType('user')}>사용자 로그인</div>
        <div className={cx('_typebox', selected.seller)} onClick={() => onSelectLoginType('seller')}>판매자 로그인</div>
      </div>
      <div className={cx('user-form-input')}>
        <div className={cx('user-email', '_input-space')}>
          <input
            className={cx('_input-form')}
            type="email"
            name="email"
            value={email}
            onChange={onChangeInput}
            placeholder="이메일 입력"
          />
        </div>
        <div className={cx('user-password', '_input-space')}>
          <input
            className={cx('_input-form')}
            type="password"
            name="password"
            value={password}
            onChange={onChangeInput}
            onKeyDown={onKeyPress}
            placeholder="비밀번호 입력"
          />
        </div>
      </div>
      <div className={cx('_button')} onClick={onLogin}>로그인</div>
      <div className={cx('register-button')}>
        <Link to="/register">회원가입</Link>
      </div>
      <SocialLoginButton onSocialLogin={() => onSocialLogin('facebook')} type="Facebook">
        <FaFacebook />
      </SocialLoginButton>
      <SocialLoginButton onSocialLogin={() => onSocialLogin('google')} type="Google">
        <FaGoogle />
      </SocialLoginButton>
    </div>
  )
}


export default UserForm