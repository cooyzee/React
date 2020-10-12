// Polyfill may be needed
// map, set, object, promise (core-js)
import 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import App from './app'
import './utils/mock'

render(
  <App />,
  document.getElementById('app')
)
