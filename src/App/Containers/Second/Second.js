import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
@connect(
  state => {
    return {
      value: state.main.get('value')
    }
  },
  (dispatch) => (
    { actions: bindActionCreators({ push }, dispatch) }
  )
)
export default class Second extends Component {
  link = () => {
    this.props.actions.push('/')
  }

  render() {
    return (
      <div>
        <h1>Second</h1>
        <button onClick={this.link}>Go Main</button>
      </div>
    )
  }
}
