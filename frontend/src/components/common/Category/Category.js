import React from 'react'
import styles from './Category.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const Category = () => (
  <div className={cx('category')}>
    <nav className={cx('category__nav')}>
      <div className={cx('item_menu')}>
        {/* menu item */}
        <div className={cx('item_menu_title')}>상의</div>
        <div className={cx('item_sub_menu')}>
          <ul>
            <li>전체</li>
            <li>반팔 티셔츠</li>
            <li>맨투맨/스웨트셔츠</li>
            <li>긴팔 티셔츠</li>
            <li>후드 스웨트셔츠/후드집업</li>
            <li>민소매 티셔츠</li>
            <li>니트/스웨터/가디건</li>
            <li>셔츠/블라우스</li>
            <li>베스트</li>
            <li>피케/카라티셔츠</li>
            <li>기타</li>
          </ul>
        </div>
      </div>

      <div className={cx('item_menu')}>
        <div className={cx('item_menu_title')}>아우터</div>
        <div className={cx('item_sub_menu')}>
          <ul>
            <li>전체</li>
            <li>겨울 싱글 코트</li>
            <li>레더/라이더스 재킷</li>
            <li>겨울 기타 코트</li>
            <li>트러커 재킷</li>
            <li>민소매 티셔츠</li>
            <li>롱 패딩/롱 헤비 아우터</li>
            <li>수트/블레이저 재킷</li>
            <li>쇼트 헤비 아우터</li>
            <li>패딩 베스트</li>
            <li>기타</li>
          </ul>
        </div>
      </div>

      <div className={cx('item_menu')}>
        <div className={cx('item_menu_title')}>원피스</div>
        <div className={cx('item_sub_menu')}>
          <ul>
            <li>전체</li>
            <li>원피스</li>
            <li>점프 수트</li>
          </ul>
        </div>
      </div>

      <div className={cx('item_menu')}>
        <div className={cx('item_menu_title')}>하의</div>
        <div className={cx('item_sub_menu')}>
          <ul>
            <li>전체</li>
            <li>데님 팬츠</li>
            <li>쇼트 팬츠</li>
            <li>코튼 팬츠</li>
            <li>스커트</li>
            <li>수트 팬츠/슬랙스</li>
            <li>레깅스</li>
            <li>트레이닝/조거 펜츠</li>
            <li>기타</li>
          </ul>
        </div>
      </div>
      
    </nav>
  </div>
);


export default Category