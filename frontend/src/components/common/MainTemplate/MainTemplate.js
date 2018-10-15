import React from 'react'
import styles from './MainTemplate.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const MainTemplate = ({children}) => (
  <div className={cx('main-template')}>
    { children }
  </div>
);


export default MainTemplate