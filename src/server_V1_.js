import express from "express"
import cors from "cors"
import serialize from "serialize-javascript"
import React from 'react'
import { renderToString } from "react-dom/server"
import path from 'path'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../store'
import App from './containers/App'
​


import { fetchAllTasks } from '../shared/api'
import App from '../shared/App'




const app = express()

app.use(cors())

app.use(express.static("public"))


app.get('*', (req, res, next) => {
  fetchAllTasks()
    .then((data) => {
      const markup = renderToString(<App data={data.data} />)

      res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <script src="/bundle.js" defer></script>
        <script>window.__INITIAL_DATA__ = ${serialize(data.data)}</script>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
    })
})


app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})