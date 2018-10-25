import React from 'react'
import styles from './UserInfo.scss'
import classNames from 'classnames/bind'
import Button from 'components/common/Button'

const cx = classNames.bind(styles)


const UserInfo = ({ meta }) => {
  if (!meta) return (<></>)
  const {
    displayName,
    email,
    phoneNum
  } = meta.toJS()

  return (
    <div className={cx('user-info')}>
      <div className={cx('_title')}>프로필</div>
      <div className={cx('profile-wrap')}>
        {/* 유저 얼굴 사진 */}
        <div className={cx('user-photo')}>
          <div className={cx('user-photo-view')}>
            <img src="https://pds.joins.com/news/component/htmlphoto_mmdata/201705/23/ec7a8507-b3f8-404d-a2b9-a2ecababd400.jpg" draggable="false" />
          </div>
          <div className={cx('user-photo-upload', '_input-file')}>
            <label htmlFor="_file">얼굴 사진 바꾸기</label>
            <input type="file" id="_file" />
          </div>
        </div>
        {/* 유저 기본 정보 */}
        <div className={cx('user-basic-info')}>
          <div className={cx('_title')}>{ displayName }</div>
          <div className={cx('email', '_text-padding')}>{ email }</div>
          <div className={cx('phoneNum', '_text-padding')}>{ phoneNum }</div>
          <div className={cx('_text-padding')}>
            {/* 비밀번호 변경 버튼은 소셜 로그인인 경우 나오지 않게 한다. */}
            <Button>비밀번호 변경</Button>
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