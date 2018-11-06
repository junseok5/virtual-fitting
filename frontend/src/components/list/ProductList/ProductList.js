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

const PrototypeItem = ({
  to,
  productPhotoUri,
  productName,
  freeShipping,
  price,
}) => {
  return (
    <div className={cx('product-item', 'animated', 'fadeIn')}>
      <div className={cx('prototype-label')}>★ Prototype 상품</div>
      <Link to={to}>
        <div className={cx('product-photo')}>
          <img src={productPhotoUri} draggable="false" />
        </div>
      </Link>
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
      {
        /*
          Prototype Items start
          If you wouldn't like to see prototype items,
            add annotations to following PrototypeItem components.
        */
      }
      <PrototypeItem
        to="/product/prototype/1"
        productPhotoUri='/images/sample_images/model_1.png'
        productName="Prototype_1"
        freeShipping="true"
        price={39000}
      />
      <PrototypeItem
        to="/product/prototype/2"
        productPhotoUri='/images/sample_images/model_2.png'
        productName="Prototype_2"
        freeShipping="true"
        price={35000}
      />
      <PrototypeItem
        to="/product/prototype/3"
        productPhotoUri='/images/sample_images/model_3.png'
        productName="Prototype_3"
        freeShipping="true"
        price={45000}
      />
      <PrototypeItem
        to="/product/prototype/4"
        productPhotoUri='/images/sample_images/model_4.png'
        productName="Prototype_4"
        freeShipping="true"
        price={39000}
      />
      <PrototypeItem
        to="/product/prototype/5"
        productPhotoUri='/images/sample_images/model_5.png'
        productName="Prototype_5"
        freeShipping="true"
        price={55000}
      />
      <PrototypeItem
        to="/product/prototype/6"
        productPhotoUri='/images/sample_images/model_6.png'
        productName="Prototype_6"
        freeShipping="true"
        price={29000}
      />
      { /* Prototype items end */ }
      { products.size === 0 && <h2>상품이 없습니다.</h2> }
      { productList }
    </div>
  )
}


export default ProductList