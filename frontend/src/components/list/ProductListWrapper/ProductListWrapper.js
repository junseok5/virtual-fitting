import React from 'react'
import styles from './ProductListWrapper.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const ProductListWrapper = ({children}) => (
  <div className={cx('product-list-wrapper')}>
    { children }
  </div>
);


export default ProductListWrapper