import React from 'react'
import styles from './Product.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const Product = ({ product }) => {
  if (!product) return null
  const {
    modelPhotoUri,
    productPhotoUri,
    productName,
    freeShipping,
    price,
    salesLink
  } = product.toJS()

  return (
    <div className={cx('product')}>
      {/* 가상피팅화면 */}
      <div className={cx('virtual-fitting-view')}>
        <div className={cx('virtual-fitting-photo')}>
          <img src={modelPhotoUri} draggable="false" />
        </div>
        <div className={cx('view-control')}>
          <div className={cx('change-button')}>
            원본 모델 보기
          </div>
        </div>
      </div>
      {/* 상품정보 */}
      <div className={cx('product-view')}>
        <div className={cx('product-photo')}>
          <img src={productPhotoUri} draggable="false" />
        </div>
        <div className={cx('product-title', '_title')}>{ productName }</div>

        <div className={cx('product-free-shipping')}>
          { freeShipping === 'true' && '무료배송' }
        </div>
        
        <div className={cx('product-price')}>{ price }원</div>
        <div className={cx('product-link-btn')}>
          <a href={salesLink} target="_blank">
            <div className={cx('product-link')}>구매하러 가기</div>
          </a>
        </div>
      </div>
    </div>
  )
}


export default Product