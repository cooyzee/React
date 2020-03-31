import React from 'react'
import { hot } from 'react-hot-loader/root'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import './app.scss'
import Test from './test'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" children={<Test />} />
      </Switch>
    </Router>
  )
}

export default hot(App)
