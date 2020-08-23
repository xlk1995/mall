<template>
  <div class="nav" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="nav-left">
        <h2>{{title}}</h2>
      </div>
      <div class="nav-right">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/config.scss';
  .nav{
    height: 70px;
    line-height: 70px;
    border-top: 1px solid $colorH;
    background: $colorG;
    z-index: 100;
    &.is_fixed{
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 0 5px 5px $colorE;
    }
    .container{
      @include flex();
      .nav-left{
        h2{
          font-size: 18px;
          color: #333333;
          font-weight: bold;
        }
      }
      .nav-right{
        color: $colorC;
        font-size: $fontJ;
        span{
          margin: 0 10px;
        }
        a{
          color: $colorC;
        }
      }

    }
  }

</style>

<script>
export default {
  name:'product-param',
  data(){
    return{
      isFixed: false,
    }
  },
  props:{
    title:String
  },
  mounted(){
    window.addEventListener('scroll',this.initHeight)
  },
  destroyed(){
    window.removeEventListener('scroll',this.initHeight,false)
  },
  methods:{
    initHeight(){
      // 第一个是y偏移量，第二个是chrome获取，第三个是ie
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop>151 ? true : false
    }
  }
}
</script>
