
<template>
  <div>
    <order-header></order-header>
    <router-view/>
    <nav-footer></nav-footer>
  </div>
</template>

<style>

</style>

<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'
export default {
  name:'order',
  components:{
    OrderHeader,NavFooter
  }
}
</script>
