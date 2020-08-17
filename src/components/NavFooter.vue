<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="http://www.baidu.com">百度一下，你就知道</a> <span>|</span>
      <a href="http://www.bilibili.com">点我看好看的</a><span>|</span>
      <a href="http://www.baidu.com">百度一下，你就知道</a> <span>|</span>
      <a href="http://www.bilibili.com">点我看好看的</a><span>|</span>
    </div>
    <div class="copyright">
      Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/config.scss';
  .footer{
    height: 234px;
    background-color: #333333;
    font-size: 16px;
    color: #999999;
    border-top: 4px solid $colorA;
    text-align: center;
    img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
    a{
      display: inline-block;
      color:#999999;
      margin: 0 8px;
    }
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
    }
    .footer-link{
      margin-bottom: 13px;
    }
    .copyright{
      .domain{
        color: $colorA;
      }
    }
  }
</style>

<script>
export default {
  name:'nav-footer'
}
</script>
