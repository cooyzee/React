import React, { useState, useEffect } from 'react'
import './index.scss'
import Modal from '../../com/components/utils/Modal'
import loading from '../../com/components/utils/Loading'
import toast from '../../com/components/utils/Toast'
import Axios from 'axios'

const testModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '70vw',
  height: '50vw',
  marginLeft: '-35vw',
  marginTop: '-25vw',
  backgroundColor: '#fff',
  padding: '10px',
  borderRadius: '10px',
}

export default function Index() {
  const [isModal, setIsModal] = useState(false)

  function testLoading() {
    loading.show()
    setTimeout(function () {
      loading.hide()
    }, 2000)
  }

  function testToast(type) {
    switch (type) {
      case 'success':
        toast.success(type)
        break
      case 'fail':
        toast.fail(type)
        break
      case 'info':
        toast.info(type)
        break
    }
  }

  useEffect(function () {
    Axios.get('/api/getUserInfo.json').then(res => {
      console.log(res.data)
    })
    // recoil
    // useRecoilState, staring strength reflection
    // string technique
  }, [])

  return (
    <div className="container">
      <h1 className="display-1">Test</h1>
      <ul>
        <li>
          <a href="#/day-js">Day.js</a>
        </li>
      </ul>
      <div className="btn btn-primary" onClick={testLoading}>show loading</div>
      <div className="row py-3">
        <div className="col d-flex justify-content-between">
          <div className="btn btn-success" onClick={() => testToast('success')}>toast success</div>
          <div className="btn btn-danger" onClick={() => testToast('fail')}>toast fail</div>
          <div className="btn btn-info" onClick={() => testToast('info')}>toast info</div>
        </div>
      </div>
      <div className="btn btn-primary" onClick={() => setIsModal(true)}>show modal</div>
      <Modal show={isModal} close={() => setIsModal(false)}>
        <div style={testModalStyle}>
          <h1>This is the modal.</h1>
        </div>
      </Modal>
      <details>
        <summary>Click to show the details</summary>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta eligendi fuga iure possimus provident quaerat quam quia ullam voluptatibus! Deleniti doloribus earum enim molestiae nostrum qui reiciendis temporibus vitae!</div>
      </details>
      <input type="range" name="range" min="0" max="100" step="1" defaultValue="20"/>
      <div className="stripe-bg" />
      <div className="shine-button">Shine Button</div>
      <div style={{height: '1000px'}} />
    </div>
  )
}
