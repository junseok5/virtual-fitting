import React from 'react'
import styles from './Product.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const Product = () => (
  <div className={cx('product')}>
    {/* 가상피팅화면 */}
    <div className={cx('virtual-fitting-view')}>
      <div className={cx('virtual-fitting-photo')}>
        <img src="https://image.musinsa.com/images/goods_img/20151008/260755/260755_2_500.jpg" draggable="false" />
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
        <img src="http://ambient.diskn.com/detailimg/18FW/coat/01_solist_bk/D01.jpg" draggable="false" />
      </div>
      <div className={cx('product-title', '_title')}>j by winter18 밍크 무스탕 코트</div>
      <div className={cx('product-free-shipping')}>무료배송</div>
      <div className={cx('product-price')}>99000원</div>
      <div className={cx('product-link-btn')}>
        <div className={cx('product-link')}>구매하러 가기</div>
      </div>
    </div>
  </div>
);


export default Product