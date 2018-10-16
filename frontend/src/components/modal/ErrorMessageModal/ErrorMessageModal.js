import React from 'react'
import styles from './ErrorMessageModal.scss'
import classNames from 'classnames/bind'
import Modal from 'react-responsive-modal'

const cx = classNames.bind(styles)


const ErrorMessageModal = ({visible, onCancel, message}) => (
  <Modal open={visible} onClose={onCancel} showCloseIcon={false} center>
    <div className={cx('error-message-modal')}>
      <div className={cx('_title')}>{ message }</div>
      <div className={cx('modal-buttons')}>
        <div className={cx('_modal-button')} onClick={onCancel}>확인</div>
      </div>
    </div>
  </Modal>
);


export default ErrorMessageModal