import React from 'react'
import styles from './ProductWrapper.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const ProductWrapper = ({children}) => (
  <div className={cx('product-wrapper')}>
    { children }
  </div>
);


export default ProductWrapper