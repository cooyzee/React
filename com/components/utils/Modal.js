import React, {useRef, useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'

const modalRoot = document.body

export default function Modal({ show, close, children }) {
  const [mounted, setMounted] = useState(false)
  const isAnimation = useRef(false) // 正在执行动画
  const el = useRef(document.createElement('div')) // prevent creating duplicated container

  if (show && !mounted) { // show modal
    isAnimation.current = true
    setMounted(show)
  }

  useEffect(function() {
    if (mounted) {
      modalRoot.style.overflow = 'hidden'
      modalRoot.appendChild(el.current)
    }
  }, [mounted])

  function animationEnd() {
    if (show) {
      isAnimation.current = false
    } else {
      setMounted(false)
      modalRoot.style.overflow = ''
      modalRoot.removeChild(el.current)
    }
  }

  function closeModal() {
    if (!isAnimation.current) {
      close()
    }
  }

  if (mounted) {
    return ReactDOM.createPortal(
      <div className={`coo-modal coo-fade-${show ? 'in' : 'out'}`} onAnimationEnd={animationEnd}>
        <div className="coo-shade" onClick={closeModal} />
        {children}
      </div>,
      el.current
    )
  }
  return null
}

