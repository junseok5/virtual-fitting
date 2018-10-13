import React from 'react'
import styles from './Button.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
  children, to, onClick, theme = 'default'
}) => {
  const Element = to ? Link : Div

  return (
    <Element
      to={to}
      className={cx('button', theme)}
      onClick={onClick}>
      {children}
    </Element>
  )
}


export default Button