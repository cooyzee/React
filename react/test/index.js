import React, { useState, useEffect } from 'react'
import Modal from '../../com/components/Modal'

function testState() {
  console.log('test-state')
  return false
}

export default function Test() {
  console.log('Test')
  const [tip, setTip] = useState(testState)
  const [msg, setMsg] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    // const id = setInterval(() => {
    //   setCount(c => c + 2)
    // }, 2000)
    // return () => {
    //   clearInterval(id)
    // }
  }, [])

  return (
    <div className="container-lg">
      <h1 className="display-1">
        Test
      </h1>
      <h1>Hello, modal {count}</h1>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div>
        <button className="btn btn-primary" onClick={() => setTip(true)}>Tip</button>
        <Modal show={tip} close={() => setTip(false)}>
          <button className="btn btn-primary ml-3" onClick={() => setMsg(true)}>Msg</button>
        </Modal>
        <Modal show={msg} close={() => setMsg(false)}>
          <h1>{count}</h1>
          <button className="btn btn-success" onClick={() => setCount(c => c + 1)}>change</button>
        </Modal>
      </div>
      <blockquote className="blockquote">
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer className="blockquote-footer">Someone famous in <cite className="mark" title="Source Title">Source Title</cite></footer>
      </blockquote>
      <MFunc>20</MFunc>
    </div>
  )
}

const MFunc = React.memo(function Func(props) {
  console.log('MFunc')
  return <h1>{props.children}</h1>
})

// function MFunc(props) {
//   console.log('MFunc')
//   return <h1>{props.children}</h1>
// }