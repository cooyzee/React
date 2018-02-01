import axios from 'axios'

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

commonAjax.interceptors.response.use(res => {
  if (res.data.success) {
    return res.data
  } else {
    return null
  }
}, function (err) {
  // Do something with response error
  return Promise.reject(err)
})

export default commonAjax
