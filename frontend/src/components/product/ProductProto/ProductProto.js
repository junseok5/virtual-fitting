import React, { Component } from 'react'
import styles from './ProductProto.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


class ProductProto extends Component {
  state = {
    products: [
      {
        id: 1,
        modelPhotoUri: '/images/sample_images/model_1.png',
        fittingPhotoUri: '/images/sample_images/avatar_fitting_1.png',
        productName: '프로토타입 샘플 1',
        freeShipping: "true",
        price: 39000
      },
      {
        id: 2,
        modelPhotoUri: '/images/sample_images/model_2.png',
        fittingPhotoUri: '/images/sample_images/avatar_fitting_2.png',
        productName: '프로토타입 샘플 2',
        freeShipping: "true",
        price: 39000
      },
      {
        id: 3,
        modelPhotoUri: '/images/sample_images/model_3.png',
        fittingPhotoUri: '/images/sample_images/avatar_fitting_3.png',
        productName: '프로토타입 샘플 3',
        freeShipping: "true",
        price: 39000
      },
      {
        id: 4,
        modelPhotoUri: '/images/sample_images/model_4.png',
        fittingPhotoUri: '/images/sample_images/avatar_fitting_4.png',
        productName: '프로토타입 샘플 4',
        freeShipping: "true",
        price: 39000
      },
      {
        id: 5,
        modelPhotoUri: '/images/sample_images/model_5.png',
        fittingPhotoUri: '/images/sample_images/avatar_fitting_5.png',
        productName: '프로토타입 샘플 5',
        freeShipping: "true",
        price: 39000
      },
      {
        id: 6,
        modelPhotoUri: '/images/sample_images/model_6.png',
        fittingPhotoUri: '/images/sample_images/avatar_fitting_6.png',
        productName: '프로토타입 샘플 6',
        freeShipping: "true",
        price: 39000
      }
    ],
    fittingMode: 'model'
  }

  handleFitting = () => {
    const { fittingMode } = this.state

    if (fittingMode === 'model') {
      this.setState({
        fittingMode: 'fitting'
      })
    } else {
      this.setState({
        fittingMode: 'model'
      })
    }
  }

  render () {
    const { fittingMode } = this.state
    const {
      modelPhotoUri,
      fittingPhotoUri,
      productName,
      freeShipping,
      price
    } = this.state.products[this.props.id - 1]

    return (
      <div className={cx('product')}>
        {/* 가상피팅화면 */}
        <div className={cx('virtual-fitting-view')}>
          <div className={cx('virtual-fitting-photo')}>
            {
              fittingMode === 'model' ?
              <img src={modelPhotoUri} draggable="false" /> :
              <img src={fittingPhotoUri} draggable="false" />
            }
          </div>
          <div className={cx('view-control')}>
            <div className={cx('change-button')} onClick={this.handleFitting}>
              {
                fittingMode === 'model' ? '가상 피팅 해보기' : '모델 사진 보기'
              }
            </div>
          </div>
        </div>
        {/* 상품정보 */}
        <div className={cx('product-view')}>
          {/* <div className={cx('product-photo')}>
            <img src={productPhotoUri} draggable="false" />
          </div> */}
          <div className={cx('product-title', '_title')}>{ productName }</div>

          <div className={cx('product-free-shipping')}>
            { freeShipping === 'true' && '무료배송' }
          </div>
          
          <div className={cx('product-price')}>{ price }원</div>
          <div className={cx('product-link-btn')}>
            <a href="https://naver.com" target="_blank">
              <div className={cx('product-link')}>구매하러 가기</div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}


export default ProductProto