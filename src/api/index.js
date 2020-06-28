import axios from 'axios'
import apiFile from './api-url'
const instance = axios.create({
  baseURL: '',
  timeout: 3000
})
console.log(apiFile)
const Http = {}


// 封装统一的接口调用方法
for (const key in apiFile) {
  const api = apiFile[key]
  Http[key] = async (params, config = {}) => {
    // 设置参数
    let newParmas = {}
    // 判断下是否是formData格式, 如果是就处理下
    if (params && api.isFormData) {
      newParmas = new FormData()
      for (const n in params) {
        newParmas.append(n, params[n])
      }
    } else {
      newParmas = params
    }
    // 不同请求的判断
    // if (api.method === 'put') { }
    console.log(config)
    await instance[api](params)
  }
}



export default Http
