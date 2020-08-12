// 封装存储api 划分模块，同时取出来的值转为json

// 设置模块名
const STORAGE_KEY = 'mall'

export default{
  // 获取模块名下的全部
  getStorage(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },

  // 获取某一模块下面的属性
  getItem(key, moudel_name){
    
    if(moudel_name){
      let val = this.getItem(moudel_name)
      if(val) return val[key]
    }
    return this.getStorage()[key]
  },


  // 给某一模块赋值
  setItem(key,value,moudel_name){
    if(moudel_name){
      let val = this.getItem(moudel_name)
      val[key] = value
      this.setItem(moudel_name,val)
    } else{
      let allStorage = this.getStorage()
      allStorage[key] = value
      window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(allStorage))
    }
    
  },

  // 删除某一属性
  clear(key, moudel_name){
    let allStorage = this.getStorage()
    if(moudel_name){
      if(!allStorage[moudel_name]) return;
      delete allStorage[moudel_name][key];
    }else{
      delete allStorage[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(allStorage))
    
  }
  


}

