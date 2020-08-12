import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

Vue.config.productionTip = false
// 把axios 挂载到vue-axios上
Vue.use(VueAxios,axios)
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

// 设置拦截器
axios.interceptors.response.use((response)=>{
  //获取响应数据
  let res = response.data
  if(response.status === 0){
    return res
  }else if(res.status === 10){
    window.location.href = '/login'
  }else{
    alert(res.msg)
  }
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
