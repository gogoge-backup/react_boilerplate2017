import React, { Component } from 'react'
import style from './main.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { incCount, decCount, fetch as fetchPosts } from './action'
import { push } from 'react-router-redux'
@connect(
  state => {
    return {
      value: state.main.get('value')
    }
  },
  (dispatch) => (
    { actions: bindActionCreators({ incCount, decCount, push, fetchPosts }, dispatch) }
  )
)
export default class Main extends Component {
  link = () => {
    this.props.actions.push('/second')
  }

  inc = (e) => {
    this.props.actions.incCount(3)
  }

  dec = (e) => {
    this.props.actions.decCount(3)
  }

  fetch = (e) => {
    this.props.actions.fetchPosts()
  }

  render() {
    return (
      <div>
      <h1>Main</h1>
      <div styleName="main">{this.props.value}</div>
      <button onClick={this.inc}>+</button>
      <button onClick={this.dec}>-</button>
      <button onClick={this.fetch}>saga fetch</button>
      <button onClick={this.link}>Go Second</button>
      </div>
    )
  }
}
