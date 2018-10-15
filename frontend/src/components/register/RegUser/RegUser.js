import React from 'react'
import styles from './RegUser.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const RegUser = () => (
  <div>
    <div className={cx('_title')}>회원가입</div>
    <div className={cx('reg-user-form')}>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="email" name="user_email" placeholder="이메일 입력" />
      </div>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="password" name="user_password" placeholder="비밀번호 입력" />
      </div>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="text" name="user_name" placeholder="이름 입력" />
      </div>
      <div className={cx('_input-space')}>
        <input className={cx('_input-form')} type="tel" name="user_phonNum" placeholder="휴대폰 번호 입력" />
      </div>
      <div className={cx('_button')}>가입완료</div>
    </div>
  </div>
);


export default RegUser