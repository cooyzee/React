// Refs provide a way to access DOM nodes or React elements created in the render method

// 1. Managing focus, text selection, or media playback.
// 2. Triggering imperative animations.
// 3. Integrating with third-party DOM libraries.

// React.createRef() upon React 16.3, callback refs

import React from 'react'
import Modal from '../common/Modal'

class RefExample extends React.Component {
  constructor(props) {
    super(props)
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef()
    this.focusTextInput = () => {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      this.textInput.current.focus()
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
        <Modal>
          <div>
            <button>AAREFS</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default RefExample

/**
 * 1. When the ref attribute is used on an HTML element, the ref created in the constructor with React.createRef() receives the underlying DOM element as its current property.
 * 2. When the ref attribute is used on a custom class component, the ref object receives the mounted instance of the component as its current.
 * 3. You may not use the ref attribute on function components because they don’t have instances.
 **/

/**
 * Cause regular function or class component don't receive the ref argument, and ref is not available in props either.
 **/
