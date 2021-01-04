import React, { useRef, useEffect } from 'react'

const style = {
  page: {
    padding: '20px'
  },
  canvas: {
    width: '200px',
    height: '200px',
    backgroundColor: '#f8f8f8'
  }
}

export default function Canvas() {
  const canvasRef = useRef(null)

  useEffect(function () {
    const canvas = canvasRef.current
    canvas.width = 200
    canvas.height = 200
    const ctx = canvas.getContext('2d')

    drawStarPath(ctx, 50, 50, 100)
    ctx.lineWidth = 2
    ctx.strokeStyle = "#f69"
    ctx.stroke()
  }, [])

  return (
    <div style={style.page}>
      <h4>Canvas</h4>
      <canvas ref={canvasRef} style={style.canvas} />
    </div>
  )
}

function drawStarPath(ctx, x, y, r) {
  ctx.beginPath()
  const angle = 360 / 5 // 72°
  for (let i = 0; i < 5; i++) {
    const gap = i * angle
    let radian = toRadian(18 + gap) // 90° - 72° = 18°
    ctx.lineTo(r * Math.cos(radian) + r, r - r * Math.sin(radian))
    radian = toRadian(54 + gap) // 72° / 2 + 18° = 54°
    const r1 = r / 2
    ctx.lineTo(r1 * Math.cos(radian) + r, r - r1 * Math.sin(radian))
  }
  ctx.closePath()
}

function toRadian(angle) {
  return Math.PI * angle / 180
}
