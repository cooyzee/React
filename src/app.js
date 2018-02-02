import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import Index from './index'
import Test from './test'
import css from '../sass/app.scss'

ReactDOM.render(
  <Router>
    <div className="container">
      <Route exact path="/" component={Index}/>
      <Route path="/test" component={Test}/>
    </div>
  </Router>,
  document.getElementById('cooyzee')
)
