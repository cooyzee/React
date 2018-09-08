import React, { Component, Fragment } from 'react'
import request from '../util/request'
import { Link } from 'react-router-dom'
import './index.scss'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    request.get('/assets/data/comments.json').then(data => {
      console.log(data)
    })
  }

  // said to be the one that we can't imagine
  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleClick(id) {
    return e => {
      console.log(e, id)
    }
  }

  render() {
    return (
      <div className="index-m">
        {true && <UseFragment />}
        <div className="section">
          <button onClick={this.handleClick(12)}>Click me</button>
        </div>
        <h3><Link to="/test">To test page</Link></h3>
      </div>
    )
  }
}

//
const UseFragment = () => (
  <Fragment>
    <h2>Creating a Toolchain from Scratch</h2>
    <ul>
      <li>A package manager</li>
      <li>A bundler</li>
      <li>A compiler</li>
    </ul>
    <h3>All react components must act like pure functions with respect to their props.</h3>
  </Fragment>
)
