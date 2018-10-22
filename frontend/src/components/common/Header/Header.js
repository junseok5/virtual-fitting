import React from 'react'
import styles from './Header.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Button from 'components/common/Button'
import Icon from 'components/common/Icon'
import { FaSearch, FaBars } from 'react-icons/fa'

const cx = classNames.bind(styles)


const Header = ({ onToggle }) => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('menu-icon')} onClick={onToggle}>
        <Icon><FaBars /></Icon>
      </div>
      <div className={cx('brand')}>
        <Link to="/">virtual fitting</Link>
      </div>
      <div className={cx('search')}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={cx('right')}>
        <div className={cx('icons')}>
          <Icon><FaSearch /></Icon>
        </div>
        <Button to="/login/user">로그인</Button>
      </div>
    </div>
  </header>
);


export default Header