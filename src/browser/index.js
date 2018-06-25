import React from 'react'
import { hydrate } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from '../store/index'
import store  from '../store'
import App from '../shared/App'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__


hydrate(
<Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
)