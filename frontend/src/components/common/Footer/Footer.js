import React from 'react'
import styles from './Footer.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)


const Footer = () => (
  <footer className={cx('footer')}>
    <div className={cx('description')}>Graduation Project</div>
    <div className={cx('github')}>
      <a href="https://github.com/junseok5/virtual-fitting" target="_blank">Github</a>
    </div>
  </footer>
);


export default Footer