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
    return {}
  },
  mounted(){
    Storage.clear('stuname','student')
    

    // let res = Storage.getStorage();
    // console.log(res);

    
  }
}
</script>
