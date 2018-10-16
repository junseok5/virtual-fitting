import React from 'react'
import styles from './PasswordEditModal.scss'
import classNames from 'classnames/bind'
import Modal from 'react-responsive-modal'

const cx = classNames.bind(styles)


const PasswordEditModal = ({visible, onConfirm, onCancel}) => (
  <Modal open={visible} onClose={onCancel} showCloseIcon={false} center>
    <div className={cx('password-edit-modal')}>
      {/* 패스워드 폼 */}
      <div className={cx('password-edit-wrap')}>
        <div className={cx('_title')}>패스워드 변경</div>
        <div className={cx('password-edit-form')}>
          <div className={cx('_subtitle')}>현재 비밀번호</div>
          <div className={cx('_input-space')}>
            <input className={cx('_input-form')} type="password" name="current_password" placeholder="현재 비밀번호 입력" />
          </div>
          <div className={cx('_subtitle')}>변경할 비밀번호</div>
          <div className={cx('_input-space')}>
            <input className={cx('_input-form')} type="password" name="edit_password_1" placeholder="변경할 비밀번호 입력" />
          </div>
          <div className={cx('_input-space')}>
            <input className={cx('_input-form')} type="password" name="edit_password_2" placeholder="변경할 비밀번호 확인" />
          </div>
        </div>
      </div>

      {/* 버튼 */}
      <div className={cx('modal-buttons')}>
        <div className={cx('_modal-button')} onClick={onConfirm}>예</div>
        <div className={cx('_modal-button')} onClick={onCancel}>아니오</div>
      </div>
    </div>
  </Modal>
);


export default PasswordEditModal