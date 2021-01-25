import Vue from 'vue';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://123.207.222.213:81'
Axios.defaults.timeout = 10000;

const axios = () => {
    Axios.interceptors.request.use(options => {
        // 数据开始请求时显示loading图标
        // Vue.prototype.$indicator.open({
        //     text: '加载中...',
        //     spinnerType: 'fading-circle',
        // })
        let token = window.sessionStorage.getItem("jiuzheToken")
        if (token) {
          options.headers.sfjzToken = token;   //将token放到请求头发送给服务器
        }
        return options;
    });
    Axios.interceptors.response.use(options => {
        // 数据响应成功后干掉loading图标
        // Vue.prototype.$indicator.close();
        return options;
    });
    Vue.prototype.$axios = Axios;
};

export default axios;