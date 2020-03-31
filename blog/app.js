import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import './app.scss'

function App() {
  const [state, setState] = useState('y')

  useEffect(() => {
    setState(state + '44')
  },[])

  return (
    <div>
      <h1>Hello world!</h1>
      <p className="blue">{state}</p>
      <img src="/assets/blog/google.ico" alt=""/>
    </div>
  )
}

export default hot(App)
