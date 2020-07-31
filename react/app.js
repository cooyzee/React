import React from 'react'
import { hot } from 'react-hot-loader/root'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import './app.scss'
import Index from './index'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" children={<Index />} />
      </Switch>
    </Router>
  )
}

export default hot(App)
