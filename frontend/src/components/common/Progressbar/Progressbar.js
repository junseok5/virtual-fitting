import React from 'react'
import styles from './Progressbar.scss'
import classNames from 'classnames/bind'

import Progress from 'react-progressbar'

const cx = classNames.bind(styles)


const Progressbar = ({ completed }) => {
  return (
    <div className={cx('progressbar')}>
      <Progress
        completed={completed}
        color="#9253EB"
        height="7px"
      />
    </div>
  )
}

export default Progressbar