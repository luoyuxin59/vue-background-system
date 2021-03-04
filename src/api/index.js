import axios from 'axios'

export function request(config) {
  //1. 创建axios的实例
  const instance = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 5000
  })
  // 2.axios拦截器
  //  2.1请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  // 2.2响应拦截器
  instance.interceptors.response.use(res => {
    response => {
      const res = response.data;
      if(res.code !==200 ) {
        this.$message.error('登录失败')
      }
    }
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求 
  return instance(config)
}

