import api from './index'
import { axios } from '@/utils/request'

// 我看了一下api底下的文件，感觉这种比较好一些，目前上传文件是用的这种模式来请求的。
export function uploadFile(parameter) {
  return axios({
    url: '/uploadavatar',
    method: 'post',
    data: parameter
  })
}
