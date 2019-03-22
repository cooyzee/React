import React, { Suspense, lazy } from 'react'
import { hot } from 'react-hot-loader'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Index from './index'
const Test = lazy(() => import('./test'))
const Refs = lazy(() => import('./refs'))
import Game from './game'
import './app.scss'
import { userInfo, UserInfoContext } from './context/UserInfoContext'

class App extends React.Component {

  state = userInfo

  render() {
    return (
      <UserInfoContext.Provider value={userInfo}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Index}/>
              <Route path="/test" component={Test}/>
              <Route path="/refs" component={Refs}/>
              <Route path="/game" component={Game}/>
            </Switch>
          </Suspense>
        </Router>
      </UserInfoContext.Provider>
    )
  }
}

export default hot(module)(App)
