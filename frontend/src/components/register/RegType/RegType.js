import React from 'react'
import styles from './RegType.scss'
import classNames from 'classnames/bind'
import Icon from 'components/common/Icon'
import { FaUser, FaBuilding } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)


const RegType = () => (
  <div className={cx('reg-type')}>
    <div className={cx('reg-title')}>회원가입</div>
    <div className={cx('reg-contents')}>
      <Link to="/register/user">
        <div className={cx('reg-user _reg-content')}>
          <Icon size="big"><FaUser /></Icon>
          <p className={cx('title')}>일반 회원가입</p>
          <div className={cx('reg-button')}>회원가입</div>
        </div>
      </Link>
      <Link to="/register/seller">
        <div className={cx('reg-seller _reg-content')}>
          <Icon size="big"><FaBuilding /></Icon>
          <p className={cx('title')}>판매자 회원가입</p>
          <div className={cx('reg-button')}>회원가입</div>
        </div>
      </Link>
    </div>
  </div>
);


export default RegType