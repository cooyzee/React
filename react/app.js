import React from 'react'
import { hot } from 'react-hot-loader/root'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import './app.scss'
import Index from './index'
import Canvas from './index/Canvas'
import DayJs from './utils/DayJs'
import IO from './utils/IntersectionObserver'
import Animation from './utils/requestAnimationFrame'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/day-js" children={<DayJs />} />
        <Route path="/io" children={<IO />} />
        <Route path="/canvas" children={<Canvas />} />
        <Route path="/animation" children={<Animation />} />
        <Route path="/" children={<Index />} />
      </Switch>
    </Router>
  )
}

export default hot(App)
