import React from 'react'
import styles from './Icon.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const Icon = ({children, size}) => {
  return (
    <div className={cx('icon', size)}>
      { children }
    </div>
  )
}


export default Icon