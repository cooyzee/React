import React, { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'

export default function Modal(props) {
  console.log('Modal')
  const [mount, setMount] = useState(props.show)

  if (props.show !== mount) {
    setMount(props.show)
  }

  return mount && <Portal {...props} />
}

const modalRoot = document.getElementById('modal')
function createWrapper() {
  console.log('init')
  const el = document.createElement('div')
  el.className = 'g-modal'
  return el
}
function Portal({ close, children }) {
  console.log('Portal')
  const el = useRef(createWrapper())

  useEffect(() => {
    modalRoot.appendChild(el.current)
    return () => {
      modalRoot.removeChild(el.current)
    }
  }, [])

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="g-shade" onClick={close} />
      {children}
    </React.Fragment>, el.current)
}


