import React from 'react'
import styles from './LoginTemplate.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const LoginTemplate = ({children}) => (
  <div className={cx('login-template')}>
    { children }
  </div>
);


export default LoginTemplate