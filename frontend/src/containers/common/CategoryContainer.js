import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Category } from 'components'

class CategoryContainer extends Component {
  render () {
    const { visible } = this.props

    return (
      <Category visible={visible} />
    )
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['sidebar', 'visible'])
  })
)(CategoryContainer)