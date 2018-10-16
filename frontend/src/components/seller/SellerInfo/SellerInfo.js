import React from 'react'
import styles from './SellerInfo.scss'
import classNames from 'classnames/bind'
import Button from 'components/common/Button'

const cx = classNames.bind(styles)


const SellerInfo = () => (
  <div className={cx('seller-info')}>
    <div className={cx('_title')}>판매자 정보</div>
    {/* 판매자 기본정보 */}
    <div className={cx('seller-basic-info')}>
      <div className={cx('info-wrap')}>
        <div className={cx('_subtitle')}>사업자 등록번호</div>
        <div className={cx('info-text' ,'_text-padding')}>3234-113153...</div>
      </div>
      <div className={cx('info-wrap')}>
        <div className={cx('_subtitle')}>회사 이름</div>
        <div className={cx('info-text', '_text-padding')}>G마켓</div>
      </div>
      <div className={cx('info-wrap')}>
        <div className={cx('_subtitle')}>이메일</div>
        <div className={cx('info-text', '_text-padding')}>gmanager@gmarket.com</div>
      </div>
      <div className={cx('info-wrap')}>
        <div className={cx('_subtitle')}>매니저 이름</div>
        <div className={cx('info-text', '_text-padding')}>오준석</div>
      </div>
      <div className={cx('info-wrap')}>
        <div className={cx('_subtitle')}>연락처</div>
        <div className={cx('info-text', '_text-padding')}>042-821-0000</div>
      </div>
      <div className={cx('info-wrap')}>
        <div className={cx('_subtitle')}>성별</div>
        <div className={cx('info-text', '_text-padding')}>남</div>
      </div>
      <Button>비밀번호 변경</Button>
      <Button>수정</Button>
    </div>
    {/* 판매자 기본정보 끝 */}
  </div>
);


export default SellerInfo