import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './Containers/Main'
import { fromJS } from 'immutable'
import { Provider } from 'react-redux'

import configureStore from './create-store.js'


const render = (store) => {
  class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <Main />
        </Provider>
      )
    }
  }

  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  )
}
// ------
// const rootInitState = fromJS({
//   value: 10,
// })

const store = configureStore()
// ------
render(store)