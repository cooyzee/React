import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './loading.scss'

let container = null

function Loading() {
  useEffect(function () {
    return () => {
      document.body.removeChild(container)
      document.body.style.overflow = ''
      container = null
    }
  }, [])

  return (
   <div className="coo-loading">
     <div className="coo-spin" />
   </div>
  )
}

function show() {
  if (!container) {
    container = document.createElement('div')
    container.id = 'coo-loading'
    document.body.appendChild(container)
    document.body.style.overflow = 'hidden'
    ReactDOM.render(<Loading />, container)
  }
}

function hide() {
  if (container) {
    ReactDOM.unmountComponentAtNode(container)
  }
}

export default {
  show,
  hide
}
