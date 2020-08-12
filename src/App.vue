<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
</style>

<script>
import Storage from './storage'
import { log } from 'util';
export default {
  data(){
    return {
      res:{}
    }
  },
  mounted(){
    this.axios.get('/login').then(res=>{
      this.res = res
      
    })

    
  }
}
</script>
