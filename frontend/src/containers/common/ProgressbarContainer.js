import React, { Component } from 'react'
import Progressbar from 'components/common/Progressbar'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

class ProgressbarContainer extends Component {
  render () {
    const { progress } = this.props
    const { visible, completed } = progress.toJS()

    if (!visible) return null
    return (
      <Progressbar
        completed={completed}
      />
    )
  }
}

export default connect(
  (state) => ({
    progress: state.base.get('progress')
  }),
  (dispatch) => ({

  })
)(ProgressbarContainer)