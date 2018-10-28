import React from 'react'
import styles from './UserInfo.scss'
import classNames from 'classnames/bind'
import Button from 'components/common/Button'

const cx = classNames.bind(styles)


const UserInfo = ({ meta, onLogout, onUploadPhoto, onShowModal }) => {
  if (!meta) return (<></>)
  const {
    displayName,
    email,
    phoneNum,
    photoUri,
    social
  } = meta.toJS()

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
          <div className={cx('_title')}>{ displayName }</div>
          <div className={cx('email', '_text-padding')}>{ email }</div>
          <div className={cx('phoneNum', '_text-padding')}>{ phoneNum }</div>
          <div className={cx('_text-padding')}>
            {/* 비밀번호 변경 버튼은 소셜 로그인인 경우 나오지 않게 한다. */}
            <Button onClick={onLogout}>로그아웃</Button>
            {
              !social && <Button onClick={() => onShowModal('password')}>비밀번호 변경</Button>
            }
            <Button>수정</Button>
          </div>
        </div>
      </div>
      <div className={cx('_title')}>기타</div>
      <div className={cx('other-info')}>
        <div className={cx('_text-padding')}>
          <Button>회원 탈퇴</Button>
        </div>
      </div>
    </div>
  )
}


export default UserInfo