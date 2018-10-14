import React from 'react'
import styles from './SocialLoginButton.scss'
import classNames from 'classnames/bind'
import Icon from 'components/common/Icon'

const cx = classNames.bind(styles)


const SocialLoginButton = ({children, type}) => (
  <div className={cx('social-login-button', type)}>
    <div className={cx('icon')}>
      {children}
    </div>
    <div className={cx('text')}>
      {type} <span className={cx('login')}>로그인</span>
    </div>
  </div>
);


export default SocialLoginButton