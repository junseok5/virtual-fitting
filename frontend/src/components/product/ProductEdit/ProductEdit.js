import React from 'react'
import styles from './ProductEdit.scss'
import classNames from 'classnames/bind'
import Button from 'components/common/Button'

const cx = classNames.bind(styles)


const ProductEdit = () => (
  <div className={cx('product-edit')}>
    <div className={cx('_title')}>상품 등록</div>
    {/* 상품 메인 */}
    <div className={cx('product-edit-main')}>
      {/* 상품 기본정보 등록 */}
      <div className={cx('product-edit-basic-info')}>
        <div className={cx('_subtitle')}>상품 이름</div>
        <div className={cx('_input-space')}>
          <input className={cx('_input-form')} type="text" name="product_name" placeholder="상품이름 입력" />
        </div>
        <div className={cx('_subtitle')}>상품 가격</div>
        <div className={cx('_input-space')}>
          <input className={cx('_input-form')} type="number" name="product_price" placeholder="상품가격 입력" />
        </div>
        <div className={cx('_subtitle')}>판매 링크</div>
        <div className={cx('_input-space')}>
          <input className={cx('_input-form')} type="text" name="product_link" placeholder="판매링크 입력" />
        </div>
        <div className={cx('_subtitle')}>카테고리 선택</div>
        <div className={cx('_input-space')}>
          <select className={cx('_select')}>
            <option value="상의">상의</option>
            <option value="하의">아우터</option>
            <option value="하의">원피스</option>
            <option value="하의">하의</option>
          </select>
        </div>
        <div className={cx('_subtitle')}>성별</div>
        <div className={cx('_input-space')}>
          <input type="radio" name="user_gender" value="남" checked />남
          <input type="radio" name="user_gender" value="여" />여
        </div>
      </div>
      {/* 상품 기본정보 등록 끝 */}

      {/* 상품사진 등록 */}
      <div className={cx('product-edit-photo')}>
        <div className={cx('photo-model')}>
          <div className={cx('_subtitle')}>모델 사진</div>
          <div className={cx('photo-model-upload')}>
            <Button>모델 사진 업로드</Button>
          </div>
          <div className={cx('photo-model-view')}>
            <img src="https://image.musinsa.com/images/goods_img/20151008/260755/260755_2_500.jpg" draggable="false" />
          </div>
        </div>
        <div className={cx('photo-cloth')}>
          <div className={cx('_subtitle')}>상품 사진</div>
          <div className={cx('photo-cloth-upload')}>
            <Button>상품 사진 업로드</Button>
          </div>
          <div className={cx('photo-cloth-view')}>
            <img src="http://ambient.diskn.com/detailimg/18FW/coat/01_solist_bk/D01.jpg" draggable="false" />
          </div>
        </div>
      </div>
      {/* 상품사진 등록 끝*/}
    </div>
    {/* 상품 메인 끝 */}
    
    <div className={cx('product-edit-btn')}>
      <div className={cx('_button')}>
        등록하기
      </div>
    </div>
  </div>
);


export default ProductEdit