import Vue from 'vue'
import Axios from 'axios'
import router from './router'


Axios.defaults.baseURL = 'http://123.207.222.213:81'
Axios.defaults.timeout = 10000;

const axios = () => {
    // http request拦截器 添加一个请求拦截器
    Axios.interceptors.request.use(function (config) {
     // Do something before request is sent
     let token = window.sessionStorage.getItem("SdjiedaiToken")
     if (token) {
         config.headers.znjdToken = token;   //将token放到请求头发送给服务器
     }
     return config
 }, function (error) {
     // Do something with request error
     return Promise.reject(error);
 });
    Axios.interceptors.response.use(res =>{
     //对响应数据做些事
     //  if(!res.data.success){
     //     alert(res.error_msg)
     //     return Promise.reject(res)
     //  }
     console.log('res',res)
     if(res.data.code === '1000') {
         // 1000 说明 token 验证失败
         // 可以直接跳转到登录页面，重新登录获取 token
         router.replace({
             path: '/login'
         })
     }
      return res
  }, function (error) {
     // Do something with request error
     return Promise.reject(error)
 })
     Vue.prototype.$axios = Axios;
 };
 export default axios;