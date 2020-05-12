import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './notebook.scss'
import showdown from 'showdown'

const converter = new showdown.Converter()

export default function Notebook() {
  const [content, setContent] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const file = location.origin +  '/blog/assets/notebook/' + id + '.md'
    const xhr = new XMLHttpRequest()
    xhr.open("GET", file)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 0) {
          setContent(xhr.responseText)
        }
      }
    }
    xhr.send()
  }, [id])

  // implement hash anchor inside the notebook
  function linkFilter(e) {
    const a = e.target.href
    if (a) {
      const anchor = a.split("#")[1]
      if (anchor.charAt(0) !== '/') {
        e.preventDefault()
        e.stopPropagation()
        try {
          document.getElementById(anchor).scrollIntoView()
        } catch (e) {}
      }
    }
  }

  return (
    <div
      className="notebook"
      onClick={linkFilter}
      dangerouslySetInnerHTML={{__html: converter.makeHtml(content)}}
    />
  )
}