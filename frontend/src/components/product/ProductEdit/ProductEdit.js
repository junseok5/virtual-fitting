import React from 'react'
import styles from './ProductEdit.scss'
import classNames from 'classnames/bind'
import Button from 'components/common/Button'

const cx = classNames.bind(styles)


const ProductEdit = ({
  forms,
  previewImage,
  onChangeInput,
  onChangeInputPhoto,
  onSubmitProduct
}) => {
  const {
    productName,
    price,
    salesLink,
    category,
    subCategory,
    targetGender,
    freeShipping
  } = forms.toJS()

  const {
    modelPhotoFile: modelUri,
    productPhotoFile: productUri
  } = previewImage.toJS()

  return (
    <div className={cx('product-edit')}>
      <div className={cx('_title')}>상품 등록</div>
      {/* 상품 메인 */}
      <div className={cx('product-edit-main')}>
        {/* 상품 기본정보 등록 */}
        <div className={cx('product-edit-basic-info')}>
          <div className={cx('_subtitle')}>상품 이름</div>
          <div className={cx('_input-space')}>
            <input
              className={cx('_input-form')}
              type="text"
              name="productName"
              value={productName}
              onChange={onChangeInput}
              placeholder="상품이름 입력"
            />
          </div>
          <div className={cx('_subtitle')}>상품 가격</div>
          <div className={cx('_input-space')}>
            <input
              className={cx('_input-form')}
              type="number"
              name="price"
              value={price}
              onChange={onChangeInput}
              placeholder="상품가격 입력"
            />
          </div>
          <div className={cx('_subtitle')}>판매 링크</div>
          <div className={cx('_input-space')}>
            <input
              className={cx('_input-form')}
              type="text"
              name="salesLink"
              value={salesLink}
              onChange={onChangeInput}
              placeholder="판매링크 입력"
            />
          </div>
          <div className={cx('_subtitle')}>카테고리 선택</div>
          <div className={cx('_input-space')}>
            <select className={cx('_select')} name="category" value={category} onChange={onChangeInput}>
              <option value="상의">상의</option>
              <option value="아우터">아우터</option>
              <option value="원피스">원피스</option>
              <option value="하의">하의</option>
            </select>
          </div>
          <div className={cx('_subtitle')}>하위 카테고리 선택</div>
          <div className={cx('_input-space')}>
          {
            category === '상의' &&
            <select className={cx('_select')} name="subCategory" value={subCategory} onChange={onChangeInput}>
              <option value="반팔 티셔츠">반팔 티셔츠</option>
              <option value="맨투맨">맨투맨</option>
              <option value="스웨트셔츠">스웨트셔츠</option>
              <option value="긴팔 티셔츠">긴팔 티셔츠</option>
              <option value="후드 스웨트셔츠">후드 스웨트셔츠</option>
              <option value="후드집업">후드집업</option>
              <option value="민소매 티셔츠">민소매 티셔츠</option>
              <option value="니트">니트</option>
              <option value="스웨터">스웨터</option>
              <option value="가디건">가디건</option>
              <option value="셔츠">셔츠</option>
              <option value="블라우스">블라우스</option>
              <option value="베스트">베스트</option>
              <option value="피케">피케</option>
              <option value="카라티셔츠">카라티셔츠</option>
              <option value="기타">상의 기타</option>
            </select>
          }
          {
            category === '아우터' &&
            <select className={cx('_select')} name="subCategory" value={subCategory} onChange={onChangeInput}>
              <option value="겨울 싱글 코트">겨울 싱글 코트</option>
              <option value="레더">레더</option>
              <option value="라이더스 재킷">라이더스 재킷</option>
              <option value="겨울 기타 코트">겨울 기타 코트</option>
              <option value="트러커 재킷">트러커 재킷</option>
              <option value="민소매 티셔츠">민소매 티셔츠</option>
              <option value="롱 패딩">롱 패딩</option>
              <option value="롱 헤비 아우터">롱 헤비 아우터</option>
              <option value="수트">수트</option>
              <option value="블레이저 재킷">블레이저 재킷</option>
              <option value="쇼트 헤비 아우터">쇼트 헤비 아우터</option>
              <option value="패딩 베스트">패딩 베스트</option>
              <option value="기타">아우터 기타</option>
            </select>
          }
          {
            category === '원피스' &&
            <select className={cx('_select')} name="subCategory" value={subCategory} onChange={onChangeInput}>
              <option value="원피스">원피스</option>
              <option value="점프 수트">점프 수트</option>
            </select>
          }
          {
            category === '하의' &&
            <select className={cx('_select')} name="subCategory" value={subCategory} onChange={onChangeInput}>
              <option value="데님 팬츠">데님 팬츠</option>
              <option value="쇼트 팬츠">쇼트 팬츠</option>
              <option value="코튼 팬츠">코튼 팬츠</option>
              <option value="스커트">스커트</option>
              <option value="수트 팬츠">수트 팬츠</option>
              <option value="슬랙스">슬랙스</option>
              <option value="레깅스">레깅스</option>
              <option value="트레이닝">트레이닝</option>
              <option value="조거 펜츠">조거 펜츠</option>
              <option value="기타">하의 기타</option>
            </select>
          }
          </div>
          <div className={cx('_subtitle')}>성별</div>
          <div className={cx('_input-space')}>
            <input
              type="radio"
              name="targetGender"
              value="남"
              checked={targetGender === '남'}
              onChange={onChangeInput}
            />남
            <input
              type="radio"
              name="targetGender"
              value="여"
              checked={targetGender === '여'}
              onChange={onChangeInput}
            />여
          </div>
          <div className={cx('_subtitle')}>배송 선택</div>
          <div className={cx('_input-space')}>
            <input
              type="radio"
              name="freeShipping"
              value="true"
              checked={freeShipping === "true"}
              onChange={onChangeInput}
            />무료배송
            <input
              type="radio"
              name="freeShipping"
              value="false"
              checked={freeShipping === "false"}
              onChange={onChangeInput}
            />유료배송
          </div>
        </div>
        {/* 상품 기본정보 등록 끝 */}

        {/* 상품사진 등록 */}
        <div className={cx('product-edit-photo')}>
          <div className={cx('photo-model')}>
            <div className={cx('_subtitle')}>모델 사진</div>
            <div className={cx('photo-model-upload')}>
              <div className={cx('_input-file')}>
                <label htmlFor="_file_model">
                  <Button>모델 사진 업로드</Button>
                </label>
                <input
                  type="file"
                  id="_file_model"
                  accept="image/*"
                  onChange={(e) => onChangeInputPhoto(e, 'modelPhotoFile')}
                />
              </div>
            </div>
            <div className={cx('photo-model-view')}>
              <img src={modelUri} draggable="false" />
            </div>
          </div>
          <div className={cx('photo-cloth')}>
            <div className={cx('_subtitle')}>상품 사진</div>
            <div className={cx('photo-cloth-upload')}>
              <div className={cx('_input-file')}>
                <label htmlFor="_file_product">
                  <Button>상품 사진 업로드</Button>
                </label>
                <input
                  type="file"
                  id="_file_product"
                  accept="image/*"
                  onChange={(e) => onChangeInputPhoto(e, 'productPhotoFile')}
                />
              </div>
            </div>
            <div className={cx('photo-cloth-view')}>
              <img src={productUri} draggable="false" />
            </div>
          </div>
        </div>
        {/* 상품사진 등록 끝*/}
      </div>
      {/* 상품 메인 끝 */}
      
      <div className={cx('product-edit-btn')}>
        <div className={cx('_button')} onClick={onSubmitProduct}>
          등록하기
        </div>
      </div>
    </div>
  )
}


export default ProductEdit