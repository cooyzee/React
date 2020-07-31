import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './toast.scss'

let container

function Toast({ state, type, msg }) {
  useEffect(function () {
    return () => {
      document.body.removeChild(container)
      document.body.style.overflow = ''
      container = null
    }
  }, [])

  function transitionEnd() {
    if (!state) {
      ReactDOM.unmountComponentAtNode(container)
    }
  }

  return (
    <div className={`coo-toast coo-fade-${state ? 'in' : 'out'}`} onTransitionEnd={transitionEnd}>
      <div className="coo-wrap">
        <div className={`coo-icon coo-${type}`} />
        <div className="coo-text">{msg}</div>
      </div>
    </div>
  )
}

function showToast(props) {
  if (container) { // only render one toast all the time
    return
  }
  container = document.createElement('div')
  container.id = 'coo-toast'
  document.body.appendChild(container)
  document.body.style.overflow = 'hidden'
  ReactDOM.render(<Toast state {...props} />, container)
  setTimeout(function () {
    ReactDOM.render(<Toast {...props} />, container)
  }, 2000)
}


export default {
  success(msg) {
    showToast({type:'success', msg})
  },
  fail(msg) {
    showToast({type:'fail', msg})
  },
  info(msg) {
    showToast({type:'info', msg})
  }
}
