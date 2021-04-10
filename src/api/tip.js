// 请求每日一句数据
import request from '@/utils/request'

export function getTodayTip(){
  return request({
    url:'/tip/today',
    method: 'get'
  })

}