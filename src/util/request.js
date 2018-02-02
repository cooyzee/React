import axios from 'axios'

// global option
const options = {
  baseURL: '/',
  timeout: 10000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}

const commonAjax = axios.create(options)

const beforeRequest = config => {
  return config
}

commonAjax.interceptors.request.use(beforeRequest)

const beforeResponse = res => {
  if (res.data.success) {
    return res.data
  } else {
    return null
  }
}

// commonAjax.interceptors.response.use(beforeResponse, function (err) {
//   // Do something with response error
//   return Promise.reject(err)
// })

export default commonAjax
