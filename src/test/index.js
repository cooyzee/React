import React, { Component } from 'react'
import Modal from '../common/Modal'

class Index extends Component {
  render() {
    return (
      <div className="test-page">
        <h1>Test page</h1>
        <Modal>
          <div>
            <button>AATEST</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Index
