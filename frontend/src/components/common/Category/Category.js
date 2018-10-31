import React from 'react'
import styles from './Category.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)


const Category = ({ visible }) => {
  const style = {
    left: visible ? '0px' : '-280px'
  }

  return (
    <div className={cx('category')} style={style}>
      <nav className={cx('category__nav')}>
        <div className={cx('item_menu')}>
          {/* menu item */}
          { /* 상의 */ }
          <div className={cx('item_menu_title')}>상의</div>
          <div className={cx('item_sub_menu')}>
            <ul>
              <Link to="/keyword/상의">
                <li>전체</li>
              </Link>
              <Link to="/category/반팔 티셔츠">
                <li>반팔 티셔츠</li>
              </Link>
              <Link to="/category/맨투맨">
                <li>맨투맨</li>
              </Link>
              <Link to="/category/스웨트 셔츠">
                <li>스웨트 셔츠</li>
              </Link>
              <Link to="/category/긴팔 티셔츠">
                <li>긴팔 티셔츠</li>
              </Link>
              <Link to="/category/후드 스웨트셔츠">
                <li>후드 스웨트셔츠</li>
              </Link>
              <Link to="/category/후드집업">
                <li>후드집업</li>
              </Link>
              <Link to="/category/민소매 티셔츠">
                <li>민소매 티셔츠</li>
              </Link>
              <Link to="/category/니트">
                <li>니트</li>
              </Link>
              <Link to="/category/스웨터">
                <li>스웨터</li>
              </Link>
              <Link to="/category/가디건">
                <li>가디건</li>
              </Link>
              <Link to="/category/셔츠">
                <li>셔츠</li>
              </Link>
              <Link to="/category/블라우스">
                <li>블라우스</li>
              </Link>
              <Link to="/category/베스트">
                <li>베스트</li>
              </Link>
              <Link to="/category/피케">
                <li>카라티셔츠</li>
              </Link>
              <Link to="/category/상의 기타">
                <li>기타</li>
              </Link>
            </ul>
          </div>
        </div>
        { /* 상의 끝 */ }

        { /* 아우터 */ }
        <div className={cx('item_menu')}>
          <div className={cx('item_menu_title')}>아우터</div>
          <div className={cx('item_sub_menu')}>
            <ul>
              <Link to="/keyword/아우터">
                <li>전체</li>
              </Link>
              <Link to="/category/겨울 싱글 코트">
                <li>겨울 싱글 코트</li>
              </Link>
              <Link to="/category/레더">
                <li>레더</li>
              </Link>
              <Link to="/category/라이더스 재킷">
                <li>라이더스 재킷</li>
              </Link>
              <Link to="/category/겨울 기타 코트">
                <li>겨울 기타 코트</li>
              </Link>
              <Link to="/category/트러커 재킷">
                <li>트러커 재킷</li>
              </Link>
              <Link to="/category/민소매 티셔츠">
                <li>민소매 티셔츠</li>
              </Link>
              <Link to="/category/롱 패딩">
                <li>롱 패딩</li>
              </Link>
              <Link to="/category/롱 헤비 아우터">
                <li>롱 헤비 아우터</li>
              </Link>
              <Link to="/category/수트">
                <li>수트</li>
              </Link>
              <Link to="/category/블레이저 재킷">
                <li>블레이저 재킷</li>
              </Link>
              <Link to="/category/쇼트 헤비 아우터">
                <li>쇼트 헤비 아우터</li>
              </Link>
              <Link to="/category/패딩 베스트">
                <li>패딩 베스트</li>
              </Link>
              <Link to="/category/아우터 기타">
                <li>기타</li>
              </Link>
            </ul>
          </div>
        </div>
        { /* 아우터 끝 */ }

        { /* 원피스 */ }
        <div className={cx('item_menu')}>
          <div className={cx('item_menu_title')}>원피스</div>
          <div className={cx('item_sub_menu')}>
            <ul>
              <Link to="/keyword/원피스">
                <li>전체</li>
              </Link>
              <Link to="/category/원피스">
                <li>원피스</li>
              </Link>
              <Link to="/category/점프 수트">
                <li>점프 수트</li>
              </Link>
            </ul>
          </div>
        </div>
        { /* 원피스 끝 */ }

        { /* 하의 */ }
        <div className={cx('item_menu')}>
          <div className={cx('item_menu_title')}>하의</div>
          <div className={cx('item_sub_menu')}>
            <ul>
              <Link to="/keyword/하의">
                <li>하의</li>
              </Link>
              <Link to="/category/데님 팬츠">
                <li>데님 팬츠</li>
              </Link>
              <Link to="/category/쇼트 팬츠">
                <li>쇼트 팬츠</li>
              </Link>
              <Link to="/category/코튼 팬츠">
                <li>코튼 팬츠</li>
              </Link>
              <Link to="/category/스커트">
                <li>스커트</li>
              </Link>
              <Link to="/category/수트 팬츠">
                <li>수트 팬츠</li>
              </Link>
              <Link to="/category/슬랙스">
                <li>슬랙스</li>
              </Link>
              <Link to="/category/레깅스">
                <li>레깅스</li>
              </Link>
              <Link to="/category/트레이닝">
                <li>트레이닝</li>
              </Link>
              <Link to="/category/조거 펜츠">
                <li>조거 펜츠</li>
              </Link>
              <Link to="/category/하의 기타">
                <li>기타</li>
              </Link>
            </ul>
          </div>
        </div>
        { /* 하의 끝 */ }
      </nav>
    </div>
  )
}


export default Category