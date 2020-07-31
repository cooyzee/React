import React, { useState, useEffect } from 'react'
import './index.scss'
import Modal from '../../com/components/Modal'
import loading from '../../com/components/utils/Loading'
import toast from '../../com/components/utils/Toast'

export default function Index() {

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

  function testModal() {
    console.log('modal')
  }

  return (
    <div className="container">
      <h1 className="display-1">Test</h1>
      <div className="btn btn-primary" onClick={testLoading}>show loading</div>
      <div className="row py-3">
        <div className="col d-flex justify-content-between">
          <div className="btn btn-success" onClick={() => testToast('success')}>toast success</div>
          <div className="btn btn-danger" onClick={() => testToast('fail')}>toast fail</div>
          <div className="btn btn-info" onClick={() => testToast('info')}>toast info</div>
        </div>
      </div>
      <div className="btn btn-primary" onClick={testModal}>show modal</div>
      <div style={{height: '1000px'}} />
    </div>
  )
}
