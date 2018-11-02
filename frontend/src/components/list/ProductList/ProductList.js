import React from 'react'
import styles from './ProductList.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)


const ProductItem = ({
  _id,
  sellerId,
  productPhotoUri,
  productName,
  freeShipping,
  price,
  onMoveToProduct,
  onMoveToEdit
}) => {
  return (
    <div className={cx('product-item', 'animated', 'fadeIn')}>
      <div className={cx('product-photo')} onClick={!sellerId ? () => onMoveToProduct(_id) : () => onMoveToEdit(_id)}>
        <img src={productPhotoUri} draggable="false" />
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

const ProductList = ({ sellerId, products, onMoveToProduct, onMoveToEdit }) => {
  const productList = products.map(
    (product, key) => {
      const {
        _id,
        productPhotoUri,
        productName,
        freeShipping,
        price
      } = product.toJS()

      return (
        <ProductItem
          _id={_id}
          sellerId={sellerId}
          productPhotoUri={productPhotoUri}
          productName={productName}
          freeShipping={freeShipping}
          price={price}
          key={key}
          onMoveToProduct={onMoveToProduct}
          onMoveToEdit={onMoveToEdit}
        />
      )
    }
  )

  return (
    <div className={cx('product-list')}>
      { products.size === 0 && <h2>상품이 없습니다.</h2> }
      { productList }
    </div>
  )
}


export default ProductList