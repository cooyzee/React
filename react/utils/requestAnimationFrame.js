import React, { useEffect } from 'react'

let timer = 0

function step(timestamp) {
  timer++
  console.log(timestamp)
  if (timer < 10) {
    window.requestAnimationFrame(step)
  }
}

export default function Animation() {

  useEffect(function () {
    window.requestAnimationFrame(step)
  }, [])

  return (
    <div>
      <img width="100%" src="https://images.unsplash.com/photo-1605026187759-6e1c8d185ff4" alt=""/>
    </div>
  )
}


// html中实现动画效果的方法很多， 可以通过定时器setTimeOut，太low消耗高，css3的transition animation 可能会很复杂，兼容性问题等等
// 还有canvas，H5提供了请求动画帧。

// setTimeout 容易出现卡顿和抖动的现象，原因是 setTimeOut任务会被放入异步队列，只有当主线程任务执行完后才会执行队列中的任务，因此实际执行的时间
// 总是比设定的时间晚，与屏幕刷新时间不一定相同，会丢帧

// 优势：由系统决定回调函数的执行时机。60Hz就是一秒钟刷新60次，每次刷新间隔中会执行一次回调函数，不会引起丢帧，不会卡顿。
// CPU节能，当页面处于未激活状态的时候，该页面的屏幕刷新任务也会被系统暂停，当页面被激活的时候，会继续执行
// 函数节流。 保证每个刷新间隔执行一次。


