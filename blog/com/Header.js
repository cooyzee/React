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
        <div className="row align-items-center header-height">
          <div className="nav-logo title"><a href="https://github.com/cooyzee">Cooyzee</a></div>
          <ul className="d-flex ml-auto list-unstyled m-0 nav-wrap">
            <li><a href="#/index">home</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}