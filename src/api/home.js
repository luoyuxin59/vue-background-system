import {request} from './index.js'

export function getNavList(params) {
  return request ({
    url: '/sales/get',
    method: 'get',
    params: params
   
  })
}