import React from 'react'
import styles from './Pagination.scss'
import classNames from 'classnames/bind'
import Button from 'components/common/Button'
import Paginator from 'react-paginate'

const cx = classNames.bind(styles)


const Pagination = ({ page, lastPage, onPageChange }) => {

  return (
    <div className={cx('pagination')}>
      <Paginator
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        initialPage={page - 1}
        pageCount={lastPage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={4}
        onPageChange={onPageChange}
        containerClassName={"paginator"}
        activeClassName={"active"}
      />
    </div>
  )
}


export default Pagination