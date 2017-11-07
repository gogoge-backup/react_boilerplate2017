import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './Containers/Main'
import Second from './Containers/Second'
import { fromJS } from 'immutable'
import { Provider } from 'react-redux'

import configureStore from './create-store.js'

import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import sagas from './Sagas/fetch'

const render = (store, history) => {
  // saga start listen
  store.sagaRun(sagas)

  class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
              <Route exact path="/" component={Main}/>
              <Route path="/second" component={Second}/>
            </div>
          </ConnectedRouter>
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

const { store, history } = configureStore()

// ------
render(store, history)