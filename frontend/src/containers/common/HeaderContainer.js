import React, { Component } from 'react'
import Header from 'components/common/Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as baseActions from 'store/modules/base'
import { stat } from 'fs';

class HeaderContainer extends Component {
  handleOpenSide = () => {
    const { BaseActions } = this.props
    BaseActions.showSidebar()
  }

  handleCloseSide = () => {
    const { BaseActions } = this.props
    BaseActions.hideSidebar()
  }

  handleToggle = () => {
    const { visible } = this.props
    const { handleOpenSide, handleCloseSide} = this
    if (visible) return handleCloseSide()
    handleOpenSide()
  }

  render () {
    const { handleToggle } = this

    return (
      <Header
        onToggle={handleToggle}
      />
    )
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['sidebar', 'visible'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(HeaderContainer)