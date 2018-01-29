import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import AppContainer from './containers/AppContainer'
import reducer from './reducers'
import { createLogger } from 'redux-logger'
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const middleware = []
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();