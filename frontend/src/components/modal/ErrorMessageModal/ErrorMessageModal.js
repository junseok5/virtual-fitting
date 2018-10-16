import React from 'react'
import styles from './ErrorMessageModal.scss'
import classNames from 'classnames/bind'
import Modal from 'react-responsive-modal'

const cx = classNames.bind(styles)


const ErrorMessageModal = ({visible, onCancel}) => (
  <Modal open={visible} onClose={onCancel} showCloseIcon={false} center>
    <div className={cx('error-message-modal')}>
      <div className={cx('_title')}>서버 오류. 다시 요청하시기 바랍니다.</div>
      <div className={cx('modal-buttons')}>
        <div className={cx('_modal-button')} onClick={onCancel}>확인</div>
      </div>
    </div>
  </Modal>
);


export default ErrorMessageModal