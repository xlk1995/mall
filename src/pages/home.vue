<template>
  <div>
    <nav-header></nav-header>
    <router-view/>
    <nav-footer></nav-footer>
  </div>
</template>

<style>

</style>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
export default {
  name:'home',
  components:{
    NavHeader,NavFooter
  }
}
</script>
