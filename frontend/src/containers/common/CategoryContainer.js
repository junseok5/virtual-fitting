import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from 'store/modules/category' 
import { Category } from 'components'

import { withRouter } from 'react-router-dom'

class CategoryContainer extends Component {
  handleSelected = (value, path) => {
    const { CategoryActions, history } = this.props

    CategoryActions.setSelected(value)
    CategoryActions.hideSidebar()
    history.push(path)
  }

  render () {
    const { visible, selected } = this.props
    const { handleSelected } = this

    return (
      <Category
        visible={visible}
        selected={selected}
        onSelected={handleSelected}
      />
    )
  }
}

export default connect(
  (state) => ({
    visible: state.category.getIn(['sidebar', 'visible']),
    selected: state.category.get('selected')
  }),
  (dispatch) => ({
    CategoryActions: bindActionCreators(categoryActions, dispatch)
  })
)(withRouter(CategoryContainer))