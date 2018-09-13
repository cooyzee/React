import React from 'react'
import { hot } from 'react-hot-loader'
import {HashRouter as Router, Route} from 'react-router-dom'
import Index from './index'
import Test from './test'
import './app.scss'
import { userInfo, UserInfoContext } from './context/UserInfoContext'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userInfo
    }
  }

  render() {
    return (
      <UserInfoContext.Provider value={this.state.userInfo}>
        <Router>
          <div className="container">
            <Route exact path="/" component={Index}/>
            <Route path="/test" component={Test}/>
          </div>
        </Router>
      </UserInfoContext.Provider>
    )
}
}

export default hot(module)(App)
