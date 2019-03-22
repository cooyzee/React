import React from 'react'
import './message.scss'

const Message = () => (
  <div id="globalMessage" className="g-message">
    <div className="content" />
  </div>
)

const showMessage = (msg) => {
  const _message = document.getElementById('globalMessage')
  _message.children[0].innerHTML = msg
  _message.className += ' show'
  setTimeout(hideMessage, 2000)
}

const hideMessage = () => {
  document.getElementById('globalMessage').className = 'g-message'
}

export default Message
export {showMessage, hideMessage}