import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, useRoutes } from 'react-router-dom'
import './index.css'
import './theme.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
