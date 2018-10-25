import React, { Component } from 'react'
import styles from './Header.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Button from 'components/common/Button'
import Icon from 'components/common/Icon'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'

const cx = classNames.bind(styles)


class Header extends Component {
  handleChange = (e) => {
    const { onChangeSearchInput } = this.props
    onChangeSearchInput(e.target.value)
  }

  render () {
    const {
      onToggleSide,
      onToggleSearch,
      actionSearch,
      searchbox,
      user,
      seller,
      loginType
    } = this.props
    const { handleChange } = this

    const { displayName } = user ? user.toJS() : { displayName: null }
    const { managerName } = seller ? seller.toJS() : { managerName: null }

    // 검색바 보이기 / 숨기기
    let searchbarStyle = null
    if (actionSearch) {
      searchbarStyle = {
        height: '8rem'
      }
      setTimeout(() => {
        this.searchInput.focus()
      }, 400)
    } else {
      searchbarStyle = {
        height: '5rem'
      }
    }

    return (
      <header className={cx('header')} style={searchbarStyle}>
        <div className={cx('header-content')}>
          <div className={cx('menu-icon')} onClick={onToggleSide}>
            <Icon><FaBars /></Icon>
          </div>
          <div className={cx('brand')}>
            <Link to="/">virtual fitting</Link>
          </div>
          <div className={cx('search')}>
            <input
              type="text"
              onChange={handleChange}
              value={searchbox}
              placeholder="Search"
            />
          </div>
          <div className={cx('right')}>
            <div className={cx('icons')} onClick={onToggleSearch}>
              <Icon><FaSearch /></Icon>
            </div>
            {
              loginType === 'user' && <div className={cx('login-info')}>
                <Link to='/user'>{ displayName }</Link>
                <span>님</span>
              </div>
            }
            {
              loginType === 'seller' && <div className={cx('login-info')}>
                <Link to='seller'>{ managerName }</Link>
                <span>님</span>
              </div>
            }
            {
              !loginType && <Button to="/login/user">로그인</Button>
            }
          </div>
        </div>
        <div className={cx('header-mobile-search')}>
          <div className={cx('ms-wrapper')}>
            <div className={cx('ms-search-icon')}>
              <FaSearch />
            </div>
            <div className={cx('ms-search-input')}>
              <input
                type="text"
                ref={(ref) => this.searchInput = ref}
                placeholder="검색"
                onChange={handleChange}
                value={searchbox}
              />
            </div>
            <div className={cx('ms-search-cancel')} onClick={onToggleSearch}>
              <FaTimes />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header