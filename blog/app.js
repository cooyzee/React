import React from 'react'
import { hot } from 'react-hot-loader/root'
import './app.scss'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './com/Header'
import Index from "./index"
import Notebook from "./notebook"

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/index" children={<Index />} />
          <Route path="/notebook/:id" children={<Notebook />} />
          <Redirect to="/index" />
        </Switch>
      </div>
    </Router>
  )
}

export default hot(App)
