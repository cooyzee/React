import React from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
    this.el.className = props.className ? `g-modal ${props.className}` : 'g-modal'
  }

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}