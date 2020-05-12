import React from 'react'
import './index.scss'

export default function Index() {
  return (
    <div className="index">
      <div className="d-flex justify-content-center mt-5">
        <div className="propeller" />
        <img className="avatar" src="/blog/assets/cooyzee.jpg" alt="cooyzee"/>
        <div className="propeller" />
      </div>
    </div>
  )
}