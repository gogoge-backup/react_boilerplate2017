import React, { Component } from 'react'
import style from './main.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { incCount, decCount } from './action'

@connect(
  state => {
    return {
      value: state.main.get('value')
    }
  },
  (dispatch) => (
    { actions: bindActionCreators({ incCount, decCount }, dispatch) }
  )
)
export default class Main extends Component {

  inc = (e) => {
    this.props.actions.incCount(3)
  }

  dec = (e) => {
    this.props.actions.decCount(3)
  }

  render() {
    return (
      <div>
      <div styleName="main">{this.props.value}</div>
      <button onClick={this.inc}>+</button>
      <button onClick={this.dec}>-</button>
      </div>
    )
  }
}
