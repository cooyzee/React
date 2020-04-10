import React, { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'

export default function Modal(props) {
  const [mount, setMount] = useState(props.show)

  if (props.show !== mount) {
    if (mount) {
      setTimeout(() => {
        setMount(false)
      }, 400)
    } else {
      setMount(props.show)
    }
  }

  return mount && <Portal {...props} />
}

const modalRoot = document.body

function Portal({ show, close, children }) {
  const el = useRef(document.createElement('div'))
  el.current.className = `g-modal fade-${show ? 'in' : 'out'}`

  useEffect(() => {
    modalRoot.appendChild(el.current)
    return () => {
      modalRoot.removeChild(el.current)
    }
  }, [])

  return ReactDOM.createPortal(
    <>
      <div className="g-shade" onClick={() => close(false)} />
      {children}
    </>, el.current)
}


