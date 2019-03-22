import React from 'react'
import './loading.scss'

const Loading = () => (
  <div id="globalLoading" className="g-loading">
    <div className="spin" />
  </div>
)

const showLoading = () => {
  document.getElementById('globalLoading').style.display = 'flex'
}

const hideLoading = () => {
  document.getElementById('globalLoading').style.display = 'none'
}

export default Loading
export {showLoading, hideLoading}
