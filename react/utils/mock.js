import Mock from 'mockjs'

// setting
Mock.setup({
  timeout: 200
})

// get user info
Mock.mock('/api/getUserInfo.json', {
  success: true,
  'data|1-10': [
    {
      'id|+1': 0,
      name: '@first',
      phone: '',
      city: '@city'
    }
  ]
})
