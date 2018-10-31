import React from 'react'
import styles from './Category.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)


const Category = ({ visible, selected, onSelected }) => {
  const style = {
    left: visible ? '0px' : '-280px'
  }

  return (
    <div className={cx('category')} style={style}>
      <nav className={cx('category__nav')}>
        <div className={cx('item_menu')}>
          { /* 상의 */ }
          <div className={cx('item_menu_title')}>상의</div>
          <div className={cx('item_sub_menu')}>
            <ul>
              <li
                className={cx(selected === '상의 전체' && 'selected')}
                onClick={() => onSelected('상의 전체', '/keyword/상의')}>전체</li>
              <li
                className={cx(selected === '반팔 티셔츠' && 'selected')}
                onClick={() => onSelected('반팔 티셔츠', '/category/반팔 티셔츠')}>반팔 티셔츠</li>
              <li
                className={cx(selected === '맨투맨' && 'selected')}
                onClick={() => onSelected('맨투맨', '/category/맨투맨')}>맨투맨</li>
              <li
                className={cx(selected === '스웨트 셔츠' && 'selected')}
                onClick={() => onSelected('스웨트 셔츠', '/category/스웨트 셔츠')}>스웨트 셔츠</li>
              <li
                className={cx(selected === '긴팔 티셔츠' && 'selected')}
                onClick={() => onSelected('긴팔 티셔츠', '/category/긴팔 티셔츠')}>긴팔 티셔츠</li>
              <li
                className={cx(selected === '후드 스웨트셔츠' && 'selected')}
                onClick={() => onSelected('후드 스웨트셔츠', '/category/후드 스웨트셔츠')}>후드 스웨트셔츠</li>
              <li
                className={cx(selected === '후드집업' && 'selected')}
                onClick={() => onSelected('후드집업', '/category/후드집업')}>후드집업</li>
              <li
                className={cx(selected === '민소매 티셔츠' && 'selected')}
                onClick={() => onSelected('민소매 티셔츠', '/category/민소매 티셔츠')}>민소매 티셔츠</li>
              <li
                className={cx(selected === '니트' && 'selected')}
                onClick={() => onSelected('니트', '/category/니트')}>니트</li>
              <li
                className={cx(selected === '스웨터' && 'selected')}
                onClick={() => onSelected('스웨터', '/category/스웨터')}>스웨터</li>
              <li
                className={cx(selected === '가디건' && 'selected')}
                onClick={() => onSelected('가디건', '/category/가디건')}>가디건</li>
              <li
                className={cx(selected === '셔츠' && 'selected')}
                onClick={() => onSelected('셔츠', '/category/셔츠')}>셔츠</li>
              <li
                className={cx(selected === '블라우스' && 'selected')}
                onClick={() => onSelected('블라우스', '/category/블라우스')}>블라우스</li>
              <li
                className={cx(selected === '베스트' && 'selected')}
                onClick={() => onSelected('베스트', '/category/베스트')}>베스트</li>
              <li
                className={cx(selected === '카라티셔츠' && 'selected')}
                onClick={() => onSelected('카라티셔츠', '/category/카라티셔츠')}>카라티셔츠</li>
              <li
                className={cx(selected === '상의 기타' && 'selected')}
                onClick={() => onSelected('상의 기타', '/category/상의 기타')}>기타</li>
            </ul>
          </div>
        </div>
        { /* 상의 끝 */ }

        { /* 아우터 */ }
        <div className={cx('item_menu')}>
          <div className={cx('item_menu_title')}>아우터</div>
          <div className={cx('item_sub_menu')}>
            <ul>
              <li
                className={cx(selected === '아우터 전체' && 'selected')}
                onClick={() => onSelected('아우터 전체', '/keyword/아우터')}>전체</li>
              <li
                className={cx(selected === '겨울 싱글 코트' && 'selected')}
                onClick={() => onSelected('겨울 싱글 코트', '/category/겨울 싱글 코트')}>겨울 싱글 코트</li>
              <li
                className={cx(selected === '레더' && 'selected')}
                onClick={() => onSelected('레더', '/category/레더')}>레더</li>
              <li
                className={cx(selected === '라이더스 재킷' && 'selected')}
                onClick={() => onSelected('라이더스 재킷', '/category/라이더스 재킷')}>라이더스 재킷</li>
              <li
                className={cx(selected === '겨울 기타 코트' && 'selected')}
                onClick={() => onSelected('겨울 기타 코트', '/category/겨울 기타 코트')}>겨울 기타 코트</li>
              <li
                className={cx(selected === '트러커 재킷' && 'selected')}
                onClick={() => onSelected('트러커 재킷', '/category/트러커 재킷')}>트러커 재킷</li>
              <li
                className={cx(selected === '민소매 티셔츠' && 'selected')}
                onClick={() => onSelected('민소매 티셔츠', '/category/민소매 티셔츠')}>민소매 티셔츠</li>
              <li
                className={cx(selected === '롱 패딩' && 'selected')}
                onClick={() => onSelected('롱 패딩', '/category/롱 패딩')}>롱 패딩</li>
              <li
                className={cx(selected === '롱 헤비 아우터' && 'selected')}
                onClick={() => onSelected('롱 헤비 아우터', '/category/롱 헤비 아우터')}>롱 헤비 아우터</li>
              <li
                className={cx(selected === '수트' && 'selected')}
                onClick={() => onSelected('수트', '/category/수트')}>수트</li>
              <li
                className={cx(selected === '블레이저 재킷' && 'selected')}
                onClick={() => onSelected('블레이저 재킷', '/category/블레이저 재킷')}>블레이저 재킷</li>
              <li
                className={cx(selected === '쇼트 헤비 아우터' && 'selected')}
                onClick={() => onSelected('쇼트 헤비 아우터', '/category/쇼트 헤비 아우터')}>쇼트 헤비 아우터</li>
              <li
                className={cx(selected === '패딩 베스트' && 'selected')}
                onClick={() => onSelected('패딩 베스트', '/category/패딩 베스트')}>패딩 베스트</li>
              <li
                className={cx(selected === '아우터 기타' && 'selected')}
                onClick={() => onSelected('아우터 기타', '/category/아우터 기타')}>기타</li>
            </ul>
          </div>
        </div>
        { /* 아우터 끝 */ }

        { /* 원피스 */ }
        <div className={cx('item_menu')}>
          <div className={cx('item_menu_title')}>원피스</div>
          <div className={cx('item_sub_menu')}>
            <ul>
              <li
                className={cx(selected === '원피스 전체' && 'selected')}
                onClick={() => onSelected('원피스 전체', '/keyword/원피스')}>전체</li>
              <li
                className={cx(selected === '원피스' && 'selected')}
                onClick={() => onSelected('원피스', '/category/원피스')}>원피스</li>
              <li
                className={cx(selected === '점프 수트' && 'selected')}
                onClick={() => onSelected('점프 수트', '/category/점프 수트')}>점프 수트</li>
            </ul>
          </div>
        </div>
        { /* 원피스 끝 */ }

        { /* 하의 */ }
        <div className={cx('item_menu')}>
          <div className={cx('item_menu_title')}>하의</div>
          <div className={cx('item_sub_menu')}>
            <ul>
              <li
                className={cx(selected === '하의 전체' && 'selected')}
                onClick={() => onSelected('하의 전체', '/keyword/하의')}>전체</li>
              <li
                className={cx(selected === '데님 팬츠' && 'selected')}
                onClick={() => onSelected('데님 팬츠', '/category/데님 팬츠')}>데님 팬츠</li>
              <li
                className={cx(selected === '쇼트 팬츠' && 'selected')}
                onClick={() => onSelected('쇼트 팬츠', '/category/쇼트 팬츠')}>쇼트 팬츠</li>
              <li
                className={cx(selected === '코튼 팬츠' && 'selected')}
                onClick={() => onSelected('코튼 팬츠', '/category/코튼 팬츠')}>코튼 팬츠</li>
              <li
                className={cx(selected === '스커트' && 'selected')}
                onClick={() => onSelected('스커트', '/category/스커트')}>스커트</li>
              <li
                className={cx(selected === '수트 팬츠' && 'selected')}
                onClick={() => onSelected('수트 팬츠', '/category/수트 팬츠')}>수트 팬츠</li>
              <li
                className={cx(selected === '슬랙스' && 'selected')}
                onClick={() => onSelected('슬랙스', '/category/슬랙스')}>슬랙스</li>
              <li
                className={cx(selected === '레깅스' && 'selected')}
                onClick={() => onSelected('레깅스', '/category/레깅스')}>레깅스</li>
              <li
                className={cx(selected === '트레이닝' && 'selected')}
                onClick={() => onSelected('트레이닝', '/category/트레이닝')}>트레이닝</li>
              <li
                className={cx(selected === '조거 펜츠' && 'selected')}
                onClick={() => onSelected('조거 펜츠', '/category/조거 펜츠')}>조거 펜츠</li>
              <li
                className={cx(selected === '하의 기타' && 'selected')}
                onClick={() => onSelected('하의 기타', '/category/하의 기타')}>기타</li>
            </ul>
          </div>
        </div>
        { /* 하의 끝 */ }
      </nav>
    </div>
  )
}


export default Category