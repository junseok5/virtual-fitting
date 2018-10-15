import React from 'react'
import styles from './LoginForm.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import SocialLoginButton from 'components/login/SocialLoginButton'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

const cx = classNames.bind(styles)


const UserForm = ({loginType}) => (
  <div className={cx('user-form')}>
    <div className={cx('_title')}>{ loginType } 로그인</div>
    <div className={cx('user-form-input')}>
      <div className={cx('user-email', '_input-space')}>
        <input className={cx('_input-form')} type="email" placeholder="이메일 입력" />
      </div>
      <div className={cx('user-password', '_input-space')}>
        <input className={cx('_input-form')} type="password" placeholder="비밀번호 입력" />
      </div>
    </div>
    <div className={cx('_button')}>로그인</div>
    <div className={cx('register-button')}>
      <Link to="/register">회원가입</Link>
    </div>
    <SocialLoginButton type="Facebook">
        <FaFacebook />
      </SocialLoginButton>
      <SocialLoginButton type="Google">
        <FaGoogle />
      </SocialLoginButton>
  </div>
)


export default UserForm