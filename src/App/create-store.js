import { createStore, applyMiddleware } from 'redux'
import reducers from './Reducers/root'

// import createHistory from 'history/createBrowserHistory'
import createHistory from 'history/createHashHistory'

import { Route } from 'react-router'
import {
  routerMiddleware,
  push
} from 'react-router-redux'

import createSagaMiddleware from 'redux-saga'

export default  function configureStore(preloadedState) {

  // for router
  const history = createHistory()

  // Build the middleware for intercepting and dispatching navigation actions
  const historyMiddleware = routerMiddleware(history)

  // end of router

  const sagaMiddleware = createSagaMiddleware() // for saga
  
  const store = createStore(
    reducers,
    preloadedState,
    applyMiddleware(
      historyMiddleware,
      sagaMiddleware,
      // thunkMiddleware,
      // loggerMiddleware
    )
  )
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(
      () => {
        const nextRootReducer = require('./Reducers/root').default;
        store.replaceReducer(nextRootReducer)
      }
    );
  }
  store.sagaRun = sagaMiddleware.run
  return { store, history }
}

