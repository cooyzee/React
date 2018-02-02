import React, { Component } from 'react'
import request from '../util/request'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    request.get('/assets/data/comments.json').then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <div className="index-page">
        <h1>Welcome!</h1>
      </div>
    )
  }
}

export default Index
