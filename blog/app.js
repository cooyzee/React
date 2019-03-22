import React from 'react'
import { hot } from 'react-hot-loader'
import './app.scss'
import Modal from '../com/components/Modal'

class App extends React.Component {

  state = {}

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <p>Yeah!</p>
        <img src="/assets/blog/google.ico" alt=""/>
        <Modal>
          <div>This is not Cooyzee.</div>
        </Modal>
      </div>
    )
  }
}

export default hot(module)(App)
