import React, { useState, useEffect, useRef } from 'react'

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

export default function IO() {
  const [img, setImg] = useState(new Array(10).fill(1))

  useEffect(function () {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          console.log('Load image.')
          item.target.src = item.target.dataset.src
          item.target.removeAttribute('alt')
          observer.unobserve(item.target)
        }
      })
    }, {
      rootMargin: '0% 0% -30% 0%'
    })
    const _img = document.querySelectorAll('img[alt]')
    _img.forEach(img => {
      observer.observe(img)
    })
  }, [])

  return (
    <div className="p-10" style={{height: '2000px'}}>
      <h1>Intersection Observer</h1>
      <ol>
        <li>Image lazy load.</li>
      </ol>
      <div style={style.imgContainer}>
        {img.map((i, j) => (
          <div key={j} style={style.imgWrap}>
            <img style={style.img} src={defaultUrl} data-src={url} alt="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}
