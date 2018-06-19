import React, { Component } from 'react'
import request from '../util/request'
import { Link } from 'react-router-dom'
import './index.scss'

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
      <div className="index-m">
        <h1 className="display-4">Welcome!</h1>
        <p className="lead">Lorem <mark>Cooyzee</mark></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <s>Error maiores nesciunt quos</s> ut voluptates! Aut, <u>error fugiat id illo illum optio</u> quibusdam repellat tenetur. Dolore explicabo laborum <small>minus</small> <strong>suscipit</strong> <em>voluptatibus</em>.</p>
        <blockquote className="blockquote text-center">
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
        <h3><Link to="/test">To test page</Link></h3>
      </div>
    )
  }
}

export default Index
