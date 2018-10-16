import React from 'react'
import styles from './RegSeller.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const RegSeller = () => (
  <div>
    <div className={cx('_title')}>판매자 회원가입</div>
    <div className={cx('reg-seller-form')}>
      <div className={cx('_subtitle')}>사업자 등록번호</div>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="text" name="seller_crn" placeholder="사업자 등록번호" />
      </div>
      <div className={cx('_subtitle')}>회사 이름</div>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="text" name="seller_company" placeholder="회사이름 입력" />
      </div>
      <div className={cx('_subtitle')}>이메일</div>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="text" name="seller_email" placeholder="이메일 입력" />
      </div>
      <div className={cx('_subtitle')}>비밀번호</div>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="password" name="seller_password" placeholder="비밀번호 입력" />
      </div>
      <div className={cx('_subtitle')}>매니저 이름</div>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="text" name="seller_name" placeholder="매니저 이름 입력" />
      </div>
      <div className={cx('_subtitle')}>휴대폰 번호</div>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="tel" name="seller_phonNum" placeholder="휴대폰 번호 입력" />
      </div>
      <div className={cx('_subtitle')}>성별</div>
      <div className={cx('_input-space')}>
        <input type="radio" name="user_gender" value="남" checked />남
        <input type="radio" name="user_gender" value="여" />여
      </div>
      <div className={cx('_button')}>가입 완료</div>
    </div>
  </div>
);


export default RegSeller