import React, { useEffect, useReducer, useRef } from 'react'

const url = 'https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/fe/stream/vip/manager.png'
const defaultUrl = 'https://sxbkj-public.oss-cn-hangzhou.aliyuncs.com/fe/stream/vip/pic.png'
const style = {
  imgContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  imgWrap: {
    width: '100px',
    height: '100px',
    margin: '20px',
    backgroundColor: '#efefef',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    maxWidth: '100px',
    maxHeight: '100px',
    objectFit: 'contain'
  }
}
function reducer(state, action) {
  switch (action.type) {
    case 'setValue': return {...state, ...action.payload}
    case 'loadMoreImg': return {...state, imgArray: state.imgArray.concat(action.payload)}
  }
}
function initImgObserver(imgObserver) {
  console.log('1111')
  return new IntersectionObserver(entries => {
    entries.forEach(item => {
      if (item.isIntersecting) {
        console.log('Load image.')
        item.target.src = item.target.dataset.src // replace src to load img
        item.target.removeAttribute('alt') // tag loaded img
        imgObserver.current.unobserve(item.target) // cancel observer
      }
    })
  }, { // for demonstration
    rootMargin: '0% 0% -30% 0%'
  })
}

export default function IO() {
  const [state, dispatch] = useReducer(reducer, {
    imgArray: new Array(5).fill(1)
  })

  // image lazy load observer
  const imgObserver = useRef()
  if (!imgObserver.current) {
    imgObserver.current = initImgObserver(imgObserver)
  }

  useEffect(function () {
    // spy scrolling to page bottom
    const bottomObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log('Reach the bottom.')
        dispatch({type: 'loadMoreImg', payload: new Array(5).fill(1)})
      }
    })
    bottomObserver.observe(document.querySelector('#bottom'))
  }, [])

  useEffect(function () {
    // stops watching all of its target elements
    imgObserver.current.disconnect()
    // apply imgObserver to images that haven't loaded yet
    const _img = document.querySelectorAll('img[alt]')
    _img.forEach(img => {
      imgObserver.current.observe(img)
    })
  }, [state])

  return (
    <div className="px-10">
      <h1>Intersection Observer</h1>
      <ol>
        <li>Image lazy load.</li>
      </ol>
      <div style={style.imgContainer}>
        {state.imgArray.map((i, j) => (
          <div key={j} style={style.imgWrap}>
            <img style={style.img} src={defaultUrl} data-src={url} alt="lazy" />
          </div>
        ))}
      </div>
      <div id="bottom" />
    </div>
  )
}
