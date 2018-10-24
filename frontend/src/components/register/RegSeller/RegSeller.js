import React from 'react'
import styles from './RegSeller.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const RegSeller = ({ forms, onChangeInput, onRegister }) => {
  const {
    crn,
    companyName,
    email,
    password,
    managerName,
    contact
  } = forms.toJS()

  return (
    <div>
      <div className={cx('_title')}>판매자 회원가입</div>
      <div className={cx('reg-seller-form')}>
        <div className={cx('_subtitle')}>사업자 등록번호</div>
        <div className={cx('_input-space')}>
          <input
            className={cx('_input-form')}
            type="text"
            name="crn"
            value={crn}
            onChange={onChangeInput}
            placeholder="사업자 등록번호"
          />
        </div>
        <div className={cx('_subtitle')}>회사 이름</div>
        <div className={cx('_input-space')}>
          <input
            className={cx('_input-form')}
            type="text"
            name="companyName"
            value={companyName}
            onChange={onChangeInput}
            placeholder="회사이름 입력"
          />
        </div>
        <div className={cx('_subtitle')}>이메일</div>
        <div className={cx('_input-space')}>
          <input
            className={cx('_input-form')}
            type="text"
            name="email"
            value={email}
            onChange={onChangeInput}
            placeholder="이메일 입력"
          />
        </div>
        <div className={cx('_subtitle')}>비밀번호</div>
        <div className={cx('_input-space')}>
          <input
            className={cx('_input-form')}
            type="password"
            name="password"
            value={password}
            onChange={onChangeInput}
            placeholder="비밀번호 입력"
          />
        </div>
        <div className={cx('_subtitle')}>매니저 이름</div>
        <div className={cx('_input-space')}>
          <input
            className={cx('_input-form')}
            type="text"
            name="managerName"
            value={managerName}
            onChange={onChangeInput}
            placeholder="매니저 이름 입력"
          />
        </div>
        <div className={cx('_subtitle')}>연락처</div>
        <div className={cx('_input-space')}>
          <input
            className={cx('_input-form')}
            type="tel"
            name="contact"
            value={contact}
            onChange={onChangeInput}
            placeholder="연락처 입력"
          />
        </div>
        <div className={cx('_button')} onClick={onRegister}>가입 완료</div>
      </div>
    </div>
  )
}


export default RegSeller