<template>
  <div class="product">
    <div class="product-nav" >
      <product-param>
        <template v-slot:buy>
          <a href="javascript:;" class="btn">立即购买</a>
        </template>
      </product-param>
    </div>
    <div class="h">1</div>
    <div class="h">1</div>
    <div class="h">1</div>
    <div class="h">1</div>
    <div class="h">1</div>
    <div class="h">1</div>
    <div class="h">1</div>
    <div class="h">1</div>
    <div class="h">1</div>
    <div class="h">1</div>
  </div>
</template>

<style lang="scss" scoped>
  .product{
    .product-nav{
      a.btn{
        color: #ffffff;
        margin-left: 10px;
      }
    }
    .h{
      height: 1000px;
      background: #ffffff;
    }

  }
</style>


<script>
import ProductParam from '@/components/ProductParam';
export default {
  name:'product',
  components:{
   ProductParam
  },
  data(){
    return{

    }
  },
  mounted(){

  },
  destroyed(){

  },
  methods:{

  }
}
</script>
