
<template>
  <div>
    <order-header></order-header>
    cart
    <nav-footer></nav-footer>
  </div>
</template>

<style>

</style>

<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'
export default {
  name:'home',
  components:{
    OrderHeader,NavFooter
  }
}
</script>
