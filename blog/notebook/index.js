import React, { useState, useEffect } from 'react'
import { useParams, Route, Switch } from 'react-router-dom'
import './notebook.scss'
import showdown from 'showdown'

const converter = new showdown.Converter()
const bookList = [
  'vocabulary-book',
  'web-storage-strategy',
]

export default function NotebookRoute() {
  return (
    <Switch>
      <Route exact path="/notebook" children={<NotebookList />} />
      <Route path="/notebook/:id" children={<Notebook />} />
    </Switch>
  )
}

function NotebookList() {
  return (
    <div className="notebook-list">
      <h1 className="display-4">Notebook</h1>
      <div className="d-flex flex-column">
        {bookList.map((b, i) => (
          <a key={i} href={`#/notebook/${b}`} className="mb-2">{b}</a>
        ))}
      </div>
    </div>
  )
}

function Notebook() {
  const [content, setContent] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const file = location.origin +  '/blog/notebook/' + id + '.md'
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
  }, [])

  return (
    <div
      className="notebook"
      dangerouslySetInnerHTML={{__html: converter.makeHtml(content)}}
    />
  )
}