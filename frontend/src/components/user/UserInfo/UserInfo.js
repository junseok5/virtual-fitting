import React from 'react'
import styles from './UserInfo.scss'
import classNames from 'classnames/bind'
import Button from 'components/common/Button'

const cx = classNames.bind(styles)


const UserInfo = () => (
  <div className={cx('user-info')}>
    <div className={cx('_title')}>프로필</div>
    <div className={cx('profile-wrap')}>
      {/* 유저 얼굴 사진 */}
      <div className={cx('user-photo')}>
        <div className={cx('user-photo-view')}>
          <img src="https://pds.joins.com/news/component/htmlphoto_mmdata/201705/23/ec7a8507-b3f8-404d-a2b9-a2ecababd400.jpg" draggable="false" />
        </div>
        <div className={cx('user-photo-upload')}>얼굴 사진 바꾸기</div>
      </div>
      {/* 유저 기본 정보 */}
      <div className={cx('user-basic-info')}>
        <div className={cx('_title')}>박보영</div>
        <div className={cx('email', '_text-padding')}>boyoung@gmail.com</div>
        <div className={cx('phoneNum', '_text-padding')}>010-5425-9244</div>
        <div className={cx('_text-padding')}>
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
);


export default UserInfo