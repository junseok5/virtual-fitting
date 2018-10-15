import React from 'react'
import styles from './ContentWrapper.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const ContentWrapper = ({children}) => (
  <div className={cx('content-wrapper')}>
    { children }
  </div>
);


export default ContentWrapper