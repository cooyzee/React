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
    console.log(dayjs(null))
  })

  return (
    <div className="container">
      <h4>Day.js</h4>
      <div>Why Day.js: 2kb; Simple; Immutable; I18n</div>
      <div>i18n: internationalization</div>
      <ul>
        {Object.keys(state).map(key => (
          <li key={key}><span style={{fontWeight: 'bold'}}>{key}</span> : {state[key]}</li>
        ))}
      </ul>

      <dl>
        <dt>Caveat:</dt>
        <dd>解析：null为无效输入，字符串只支持IOS 8601格式</dd>
      </dl>
    </div>
  )
}
