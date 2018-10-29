import React from 'react'
import styles from './UserInfo.scss'
import classNames from 'classnames/bind'
import Button from 'components/common/Button'

const cx = classNames.bind(styles)


const UserInfo = ({
  meta,
  showEdit,
  editForm,
  onLogout,
  onUploadPhoto,
  onShowModal,
  onShowEdit,
  onChangeInput,
  onPatchUserInfo,
  onClickLeave
}) => {
  if (!meta) return (<></>)
  const {
    displayName,
    email,
    phoneNum,
    photoUri,
    social
  } = meta.toJS()

  let {
    displayName: editedDisplayName,
    phoneNum: editedPhoneNum
  } = editForm.toJS()

  // 수정 input 초기 값 설정
  if (!editedDisplayName) {
    editedDisplayName = displayName
  }
  if (!editedPhoneNum) {
    editedPhoneNum = phoneNum
  }

  let phoneNumView = null
  if (showEdit && !social) {
    phoneNumView = (
      <input
        type="tel"
        className={cx('_input-form')}
        name="phoneNum"
        value={editedPhoneNum}
        onChange={onChangeInput}
        placeholder="수정할 폰 번호 입력"
      />
    )
  }

  return (
    <div className={cx('user-info')}>
      <div className={cx('_title')}>프로필</div>
      <div className={cx('profile-wrap')}>
        {/* 유저 얼굴 사진 */}
        <div className={cx('user-photo')}>
          <div className={cx('user-photo-view')}>
            {
              !photoUri && <img src="/images/users/default.jpg" draggable="false" />
            }
            {
              photoUri && <img src={photoUri} draggable="false" />
            }
          </div>
          <div className={cx('user-photo-upload', '_input-file')}>
            <label htmlFor="_file">얼굴 사진 업로드</label>
            <input
              type="file"
              id="_file"
              accept="image/*"
              onChange={onUploadPhoto}
            />
          </div>
        </div>
        {/* 유저 기본 정보 */}
        <div className={cx('user-basic-info')}>
          <div className={cx('_title')}>
            { !showEdit && displayName }
            {
              showEdit &&
              <input
                type="text"
                className={cx('edit-displayName', '_input-form')}
                name="displayName"
                value={editedDisplayName}
                onChange={onChangeInput}
                placeholder="수정할 이름 입력"
              />
            }
          </div>
          <div className={cx('email', '_text-padding')}>{ email }</div>
          <div className={cx('phoneNum', '_text-padding')}>
            { !showEdit && phoneNum }
            { phoneNumView }
          </div>
          <div className={cx('_text-padding')}>
            {/* 비밀번호 변경 버튼은 소셜 로그인인 경우 나오지 않게 한다. */}
            {
              !social && <Button onClick={() => onShowModal('password')}>비밀번호 변경</Button>
            }
            {
              !showEdit && <Button onClick={onShowEdit}>수정</Button>
            }
            {
              showEdit && <Button onClick={onPatchUserInfo}>완료</Button>
            }
            {
              showEdit && <Button onClick={onShowEdit}>취소</Button>
            }
          </div>
          <div className={cx('_text-padding')}>
            <Button onClick={onLogout}>로그아웃</Button>
          </div>
        </div>
      </div>
      <div className={cx('_title')}>기타</div>
      <div className={cx('other-info')}>
        <div className={cx('_text-padding')}>
          <Button onClick={onClickLeave}>회원 탈퇴</Button>
        </div>
      </div>
    </div>
  )
}


export default UserInfo