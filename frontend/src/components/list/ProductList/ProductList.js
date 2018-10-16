import React from 'react'
import styles from './ProductList.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)


const ProductItem = () => {
  return (
    <div className={cx('product-item')}>
      <div className={cx('product-photo')}>
        <img src="//image.musinsa.com/images/goods_img/20180906/850274/850274_1_180.jpg" draggable="false" />
      </div>
      <div className={cx('product-info')}>
        <div className={cx('product-info-title')}>타이틀</div>
        <div className={cx('product-info-price')}>99000원</div>
      </div>
    </div>
  )
}

const ProductList = () => (
  <div className={cx('product-list')}>
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
  </div>
);


export default ProductList