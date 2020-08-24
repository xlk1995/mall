<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo fl">
        <a href="/index"></a>
      </div>
      <div class="order-hearder-content clearfix ">
        <h3 class="fl">{{title}} <slot name="tips"></slot></h3>
        <div class="order-username fr">{{$store.state.username}}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .order-header{
    box-sizing: border-box;
    height: 117px;
    padding: 30px 0;
    border-bottom: 2px solid #FF6600;
    .container{
      .header-logo {
        margin-right: 15px;
      }
      .order-hearder-content{
        height: 55px;
        line-height: 55px;
        h3{
          font-size: 28px;

        }
      }
    }
  }

</style>

<script>
export default {
  name:'order-header',
  props:{
    title:String
  },
}
</script>
