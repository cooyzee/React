import React from 'react'
import { render } from 'react-dom'
import App from './app'
import Loading from '../com/components/Loading'
import Message from '../com/components/Message'

render(
  <React.Fragment>
    <Loading />
    <Message />
    <App />
  </React.Fragment>, document.getElementById('cooyzee')
)
