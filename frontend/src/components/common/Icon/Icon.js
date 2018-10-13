import React from 'react'
import styles from './Icon.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classNames.bind(styles)


const Icon = ({icon}) => {
  return (
    <div className={cx('icon')}>
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}


export default Icon