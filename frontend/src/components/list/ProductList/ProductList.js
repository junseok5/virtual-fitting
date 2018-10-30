import React from 'react'
import styles from './ProductList.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)


const ProductItem = ({
  modelPhotoUri,
  productName,
  freeShipping,
  price
}) => {
  return (
    <div className={cx('product-item', 'animated', 'fadeIn')}>
      <div className={cx('product-photo')}>
        <img src={modelPhotoUri} draggable="false" />
      </div>
      <div className={cx('product-info')}>
        <div className={cx('product-info-title')}>{ productName }</div>
        <div className={cx('product-ship')}>
          {
            freeShipping === 'true' && <span>무료배송</span>
          }
        </div>
        <div className={cx('product-info-price')}>{ price }원</div>
      </div>
    </div>
  )
}

const ProductList = ({ products }) => {
  const productList = products.map(
    (product) => {
      const {
        modelPhotoUri,
        productName,
        freeShipping,
        price
      } = product.toJS()

      return (
        <ProductItem
          modelPhotoUri={modelPhotoUri}
          productName={productName}
          freeShipping={freeShipping}
          price={price}
        />
      )
    }
  )

  return (
    <div className={cx('product-list')}>
      { productList }
    </div>
  )
}


export default ProductList