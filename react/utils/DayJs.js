import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default function DayJs() {
  const [state, setState] = useState({
    isValid: 'whether the Day.js object contains a valid date or not',
    format: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    from: dayjs('2019-01-01').fromNow()
  })

  useEffect(function () {
    console.log(dayjs(undefined).isValid())
  })

  return (
    <div className="container">
      <h4>Day.js</h4>
      <ul>
        {Object.keys(state).map(key => (
          <li key={key}><span style={{fontWeight: 'bold'}}>{key}</span> : {state[key]}</li>
        ))}
      </ul>
    </div>
  )
}
