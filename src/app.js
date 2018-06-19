import React from 'react'
import { hot } from 'react-hot-loader'
import {HashRouter as Router, Route} from 'react-router-dom'
import Index from './index'
import Test from './test'
import css from './app.scss'

const App = () => (
  <Router>
    <div className="container">
      <Route exact path="/" component={Index}/>
      <Route path="/test" component={Test}/>
    </div>
  </Router>
)

export default hot(module)(App)
