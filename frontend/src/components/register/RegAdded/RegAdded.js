import React from 'react'
import styles from './RegAdded.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const RegAdded = () => (
  <div className={cx('reg-added')}>
    <div className={cx('_title')}>회원가입</div>
    <div className={cx('reg-added-form')}>
      <div className={cx('_subtitle')}>휴대폰 번호</div>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="tel" name="user_phoneNum" placeholder="휴대폰 번호 입력" />
      </div>
      <div className={cx('_subtitle')}>성별</div>
      <div className={cx('_input-space')}>
        <input type="radio" name="user_gender" value="남" checked />남
        <input type="radio" name="user_gender" value="여" />여
      </div>
      <div className={cx('_button')}>가입완료</div>
    </div>
  </div>
);


export default RegAdded