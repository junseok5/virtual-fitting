import React from 'react'
import styles from './SellerInfo.scss'
import classNames from 'classnames/bind'
import Button from 'components/common/Button'

const cx = classNames.bind(styles)


const SellerInfo = ({
  meta,
  showEdit,
  editForm,
  onLogout,
  onShowModal,
  onShowEdit,
  onChangeInput,
  onInitialInput,
  onPatchSellerInfo
}) => {
  if (!meta) return (<></>)
  const {
    crn,
    companyName,
    email,
    managerName,
    contact,
  } = meta.toJS()

  let {
    companyName: editedCompanyName,
    managerName: editedManagerName,
    contact: editedContact
  } = editForm.toJS()

  // Edit input 초기 값 설정
  

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
          <div className={cx('info-text', '_text-padding')}>
            { !showEdit && companyName }
            {
              showEdit &&
              <input
                type="text"
                className={cx('_input-form')}
                name="companyName"
                value={editedCompanyName}
                onChange={onChangeInput}
                placeholder="수정할 회사 이름 입력"
              />
            }
          </div>
        </div>
        <div className={cx('info-wrap')}>
          <div className={cx('_subtitle')}>이메일</div>
          <div className={cx('info-text', '_text-padding')}>{ email }</div>
        </div>
        <div className={cx('info-wrap')}>
          <div className={cx('_subtitle')}>매니저 이름</div>
          <div className={cx('info-text', '_text-padding')}>
            { !showEdit && managerName }
            {
              showEdit &&
              <input
                type="text"
                className={cx('_input-form')}
                name="managerName"
                value={editedManagerName}
                onChange={onChangeInput}
                placeholder="수정할 매니저 이름 입력"
              />
            }
          </div>
        </div>
        <div className={cx('info-wrap')}>
          <div className={cx('_subtitle')}>연락처</div>
          <div className={cx('info-text', '_text-padding')}>
            { !showEdit && contact }
            {
              showEdit &&
              <input
                type="tel"
                className={cx('_input-form')}
                name="contact"
                value={editedContact}
                onChange={onChangeInput}
                placeholder="수정할 연락처 입력 (-포함)"
              />
            }
          </div>
        </div>
        <Button onClick={onLogout}>로그아웃</Button>
        <Button onClick={() => onShowModal('password')}>비밀번호 변경</Button>
        {
          !showEdit && <Button onClick={onShowEdit}>수정</Button>
        }
        {
          showEdit && <Button onClick={onPatchSellerInfo}>완료</Button>
        }
        {
          showEdit && <Button onClick={onShowEdit}>취소</Button>
        }
      </div>
      {/* 판매자 기본정보 끝 */}

      <div className={cx('_title')}>기타</div>
      <div className={cx('other-info')}>
        <div className={cx('_text-padding')}>
          <Button>상품 관리</Button>
          <Button onClick={() => onShowModal('leave')}>회원 탈퇴</Button>
        </div>
      </div>
    </div>
  )
}


export default SellerInfo