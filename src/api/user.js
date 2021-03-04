import {request}  from './index.js'

export  function login(params) {
  return request({
    url: 'api/user/login',
    method: 'get',
    data: params
  })
}
