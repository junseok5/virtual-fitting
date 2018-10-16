import React from 'react'
import styles from './ProductAddBtn.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const ProductAdd = () => (
  <div className={cx('product-add')}>
    <div className={cx('product-add-btn')}>
      + N E W
    </div>
  </div>
);


export default ProductAdd