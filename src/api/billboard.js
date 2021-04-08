// 请求公告栏数据
import request from '@/utils/request'

export function getBillboard(){
  return request({
    url:'/billboard/show',
    method: 'get'
  })

}