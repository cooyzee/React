// 一些环境预读
const ua = navigator.userAgent.toLowerCase()
const isWechatEnv = ua.indexOf('micromessenger') > -1
const isIosEnv = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1

// 日期格式过滤
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 价格过滤
const formatPrice = (input, isPenny) => {
  let price = parseFloat(input)
  if (isNaN(price)) {
    return ''
  }
  if (!isPenny) {
    price = price * 100
  }
  price = price.toFixed() / 100
  if (price > 10000) { // endFix '万'
    price = (price / 100).toFixed()
    return (price / 100) + '万'
  }
  return price + '元'
}

export {
  isWechatEnv,
  isIosEnv,
  formatTime,
  formatPrice,
}
