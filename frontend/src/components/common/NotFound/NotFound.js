import React from 'react'
import styles from './NotFound.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)


const NotFound = () => (
  <div className={cx('not-found')}>
    <div className={cx('not-found-title', '_title')}>페이지를 찾을 수 없습니다.</div>
    <Link to="/">
      <div className={cx('_button')}>
        홈으로 이동
      </div>
    </Link>
  </div>
);


export default NotFound