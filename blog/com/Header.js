import React from 'react'
import './header.scss'

export default function Header() {
  return (
    <div className="header">
      <div className="row no-gutters rainbow">
        <div className="col bg-primary" />
        <div className="col bg-success" />
        <div className="col bg-warning" />
        <div className="col bg-danger" />
        <div className="col bg-info" />
        <div className="col bg-light" />
        <div className="col bg-secondary" />
        <div className="col bg-dark" />
      </div>
      <div className="container">
        <div className="row align-items-center px-3 px-sm-0">
          <div className="coo-logo pt-1 py-md-3"><a href="/">Cooyzee</a></div>
          <ul className="d-flex ml-auto list-unstyled m-0 coo-nav">
            <li><a href="#/index">home</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}