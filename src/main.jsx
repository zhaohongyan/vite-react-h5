import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

// import 'antd-mobile/es/global'
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
