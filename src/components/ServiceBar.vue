<template>
  <div class="service">
    <div class="container">
      <ul>
        <!-- <li class="service-item">
          <img src="/imgs/icon-setting.png" alt="">
          <span>预约维修服务</span>
        </li><span class="line">|</span>
        <li class="service-item">
          <img src="/imgs/icon-7day.png" alt="">
          <span>7天无理由退货</span>
        </li><span>|</span>
        <li class="service-item">
          <img src="/imgs/icon-15day.png" alt="">
          <span>15天免费换货</span>
        </li><span>|</span>
        <li class="service-item">
          <img src="/imgs/icon-post.png" alt="">
          <span>满150元包邮</span>
        </li> -->
        <li>
          <span class="icon-setting"></span>
          预约维修服务
        </li>
        <li>
          <span class="icon-7day"></span>
          7天无理由退货
        </li>
        <li>
          <span class="icon-15day"></span>
          满150元包邮
        </li>
        <li>
          <span class="icon-post"></span>
          预约维修服务
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
  .service{
    font-size: 16px;
    line-height: 16px;
    padding: 33px 0;
    color: #666666;
    li{
      display: inline-block;
      width: 24.9%;
      text-align: center;
      border-right: 1px solid #E5E5E5;
      span{
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 8px;
      }
      .icon-setting{
        @include bgImg(20px,20px,'/imgs/icon-setting.png')
      }
      .icon-7day{
        @include bgImg(20px,20px,'/imgs/icon-7day.png')
      }
      .icon-15day{
        @include bgImg(20px,20px,'/imgs/icon-15day.png')
      }  
      .icon-post{
        @include bgImg(20px,20px,'/imgs/icon-post.png')
      }          
    }
  }

</style>

<script>
export default {
  name:'service-bar'
}
</script>
