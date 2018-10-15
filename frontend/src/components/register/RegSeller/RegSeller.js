import React from 'react'
import styles from './RegSeller.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const RegSeller = () => (
  <div>
    <div className={cx('_title')}>판매자 회원가입</div>
    <div className={cx('reg-seller-form')}>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="text" name="crn" placeholder="사업자 등록번호" />
      </div>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="text" name="email" placeholder="이메일 입력" />
      </div>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="password" name="password" placeholder="비밀번호 입력" />
      </div>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="tel" name="phonNum" placeholder="휴대폰 번호 입력" />
      </div>
      <div className={cx('_button')}>가입 완료</div>
    </div>
  </div>
);


export default RegSeller