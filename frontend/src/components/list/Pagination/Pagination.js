import React from 'react'
import styles from './Pagination.scss'
import classNames from 'classnames/bind'
import Button from 'components/common/Button'

const cx = classNames.bind(styles)


const Pagination = () => (
  <div className={cx('pagination')}>
    <Button theme="gray">1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
    <Button>5</Button>
    <Button>6</Button>
    <Button>7</Button>
    <Button>8</Button>
    <Button>9</Button>
    <Button>10</Button>
    <Button>Next</Button>
  </div>
);


export default Pagination