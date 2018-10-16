import React from 'react'
import styles from './AskRemoveModal.scss'
import classNames from 'classnames/bind'
import Modal from 'react-responsive-modal'

const cx = classNames.bind(styles)


const AskRemoveModal = ({visible, onConfirm, onCancel}) => (
  <Modal open={visible} onClose={onCancel} showCloseIcon={false} center>
    <div className={cx('ask-remove-modal')}>
      <div className={cx('_title')}>
        정말로 삭제하시겠습니까?
      </div>
      <div className={cx('modal-buttons')}>
        <div className={cx('_modal-button')} onClick={onConfirm}>예</div>
        <div className={cx('_modal-button')} onClick={onCancel}>아니오</div>
      </div>
    </div>
  </Modal>
);


export default AskRemoveModal