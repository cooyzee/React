import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './notebook.scss'
import showdown from 'showdown'

const converter = new showdown.Converter()

export default function Notebook() {
  const [content, setContent] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const file = location.origin +  '/assets/blog/notebook/' + id + '.md'
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

  return (
    <div
      className="notebook"
      dangerouslySetInnerHTML={{__html: converter.makeHtml(content)}}
    />
  )
}