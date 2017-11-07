import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Reducers/root'

export default  function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
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
  return store
}

