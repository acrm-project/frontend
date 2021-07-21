import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Routes } from '../lib/routing'
import { history } from '../lib/routing/history'
import { GlobalStyles } from './global-styles/global'

import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Routes />
      <GlobalStyles />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
