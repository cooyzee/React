import React from 'react'
import './tabs.scss'

export default function Tabs({ children }) {
  const _children = React.Children.toArray(children)
  return (
    <div className="g-tab-wrap">
      {React.Children.map(_children, item => (
        <div key={item.key} className="g-tab">
          {item.props.children}
        </div>
      ))}
    </div>
  )
}