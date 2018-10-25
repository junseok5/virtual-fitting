import React from 'react'
import styles from './SellerInfo.scss'
import classNames from 'classnames/bind'
import Button from 'components/common/Button'

const cx = classNames.bind(styles)


const SellerInfo = ({ meta, onLogout }) => {
  if (!meta) return (<></>)
  const {
    crn,
    companyName,
    email,
    managerName,
    contact,
  } = meta.toJS()

  return (
    <div className={cx('seller-info')}>
      <div className={cx('_title')}>판매자 정보</div>
      {/* 판매자 기본정보 */}
      <div className={cx('seller-basic-info')}>
        <div className={cx('info-wrap')}>
          <div className={cx('_subtitle')}>사업자 등록번호</div>
          <div className={cx('info-text' ,'_text-padding')}>{ crn }</div>
        </div>
        <div className={cx('info-wrap')}>
          <div className={cx('_subtitle')}>회사 이름</div>
          <div className={cx('info-text', '_text-padding')}>{ companyName }</div>
        </div>
        <div className={cx('info-wrap')}>
          <div className={cx('_subtitle')}>이메일</div>
          <div className={cx('info-text', '_text-padding')}>{ email }</div>
        </div>
        <div className={cx('info-wrap')}>
          <div className={cx('_subtitle')}>매니저 이름</div>
          <div className={cx('info-text', '_text-padding')}>{ managerName }</div>
        </div>
        <div className={cx('info-wrap')}>
          <div className={cx('_subtitle')}>연락처</div>
          <div className={cx('info-text', '_text-padding')}>{ contact }</div>
        </div>
        <Button onClick={onLogout}>로그아웃</Button>
        <Button>비밀번호 변경</Button>
        <Button>수정</Button>
      </div>
      {/* 판매자 기본정보 끝 */}

      <div className={cx('_title')}>기타</div>
      <div className={cx('other-info')}>
        <div className={cx('_text-padding')}>
          <Button>상품 관리</Button>
          <Button>회원 탈퇴</Button>
        </div>
      </div>
    </div>
  )
}


export default SellerInfo