let baseUrl;

switch(process.env.NODE_ENV){
  case 'development':
    baseUrl = 'http://dev-mall-pre.springboot.cn/api'
    break
  case 'test':
    baseUrl = 'http://test-mall-pre.springboot.cn/api'
    break 
  case 'production':
    baseUrl = 'http://prod-mall-pre.springboot.cn/api'
    break      
}

export default {
  baseUrl
}