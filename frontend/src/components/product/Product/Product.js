import React from 'react'
import styles from './Product.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const Product = () => (
  <div className={cx('product')}>
    {/* 가상피팅화면 */}
    <div className={cx('virtual-fitting-view')}>
      <div className={cx('virtual-fitting-photo')}>
      
      </div>
      <div className={cx('change_button')}>
      
      </div>
    </div>
    {/* 상품정보 */}
    <div className={cx('product-view')}>
      <div className={cx('product-photo')}>
      
      </div>
      <div className={cx('product-title')}></div>
      <div className={cx('product-price')}></div>
      <div className={cx('product-link')}></div>
    </div>
  </div>
);


export default Product