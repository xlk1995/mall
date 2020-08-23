import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import env from './env.js'
import { log } from 'util';

Vue.config.productionTip = false

const mock = false
if(mock){
  require('./mock/api')
}

// 把axios 挂载到vue-axios上
Vue.use(VueAxios,axios)
// 使用懒加载
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
// 使用vue-cookie
Vue.use(VueCookie)

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
//设置拦截器
axios.interceptors.response.use((response)=>{
  //获取响应数据
  let res = response.data.data
  let code = response.data.status
  if(code === 0){
    return res
  }else if(code === 10){
    let path = location.pathname
    if(path !== '/index'){
      window.location.href = '/login' 
    }
    return Promise.reject(res)
  }else{
    res = response.data
    alert(res.msg)
    return Promise.reject(res)
  }
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
