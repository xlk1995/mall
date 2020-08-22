<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './assets/scss/config.scss';
  @import './assets/scss/reset.scss';
  @import './assets/scss/button.scss';
  @import '@/assets/scss/mixin.scss';
  @import '@/assets/scss/base.scss';
</style>

<script>
import Storage from './storage'
import { log } from 'util';
import {mapActions} from 'vuex'
export default {
  data(){
    return {
    }
  },
  mounted(){
    this.getUser()
    this.getCartCount()
    
  },
  methods:{
    ...mapActions(['saveUsername','saveCartCount']),
    // 获取用户信息
    getUser(){
      this.axios.get('/user').then((res)=>{
        let {username} = res
        // this.$store.dispatch('saveUsername',username)
        this.saveUsername(username)
      })
    },

    // 获取商品总和
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        // to-do 保存到vuex中
        // this.$store.dispatch('saveCartCount',res)
        this.saveCartCount(res)
      })
    }
  }
}
</script>
