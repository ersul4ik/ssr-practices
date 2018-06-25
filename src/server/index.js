import express from "express"
import React from 'react'
import { renderToString } from "react-dom/server"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../shared/App'
import store from '../store'

const app = express()

app.use(express.static("public"))

app.use(handleRender)

function handleRender(req, res) {

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const preloadedState = store.getState()

  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
  <!DOCTYPE html>
  <html>
      <head>
        <title>Redux SSr</title>
        <script src="/bundle.js" defer></script>
        </head>
      <body>
        <div id="root">${html}</div>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>
        </body>
    </html>
    `
}


app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})