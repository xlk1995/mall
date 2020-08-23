<template>
  <div class="product">
    <div class="product-nav" >
      <product-param :title="product.name">
        <template v-slot:buy>
          <a href="javascript:;" class="btn" @click="buy">立即购买</a>
        </template>
      </product-param>
    </div>
    <div class="content">
      <div class="product-info">
        <h2>{{product.name}}</h2>
        <h3>{{product.subtitle}}</h3>
        <p>
          <a href="javascript:;">全球首款双频 GP</a><span>|</span>
          <a href="javascript:;">骁龙845</a><span>|</span>
          <a href="javascript:;">AI 变焦双摄</a><span>|</span>
          <a href="javascript:;">红外人脸识别</a>
        </p>
        <div class="price">￥{{product.price}}</div>
      </div>
    </div>
    <div class="img-1"></div>
    <div class="img-2"></div>
    <div class="swiper-box">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
        <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
        <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
        <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <p class="desc">小米8 AI变焦双摄拍摄</p>
    </div>
    <div class="video-box">
      <h2>
        60帧超慢动作摄影
        <br>
        慢慢回味每一瞬间的精彩
      </h2>
      <p>
        后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
        <br>
        更能AI 精准分析视频内容，15个场景智能匹配背景音效。
      </p>
      <div class="video-bg" @click="showSlide='slideDown'"></div>
      <div class="video-content" v-show="showSlide">
        <div class="overlay"></div>
        <div class="video" :class="showSlide">
          <span class="icon-close" @click="closeVideo"></span>
          <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/config.scss';
@import '@/assets/scss/mixin.scss';
  .product{
    .product-nav{
      a.btn{
        color: #ffffff;
        margin-left: 10px;
      }
      
    }
    .content{
      height: 718px;
      @include bg('/imgs/product/product-bg-1.png');
      .product-info{
        color: $colorB;
        text-align: center;
        h2{
          font-size: 80px;
          padding-top: 55px;  
        }
        h3{
          font-size: 24px;
        }
        p{
          font-size: 16px;
          margin: 21px 0 40px;
          a{
            color: $colorB;
          }
          span{
            margin: 0 10px;
          }
        }
        .price{
          font-size: 38px;
        }
      }

    }
    .img-1{
      @include bg('/imgs/product/product-bg-2.png');
      height: 480px;
      background-size:1226px;
    }
    .img-2{
      @include bg('/imgs/product/product-bg-3.png');
      height: 638px;
      background-size:100% 100%;
    }
    .swiper-box{
      margin: 36px 0 52px;
      .swiper-slide{
        width: 455px;
        height: 258px;
        img{
         width: auto;
         height: 258px;
        }      
      }
      .desc{
        color: $colorB;
        font-size: 18px;
        text-align: center;
      }
    }
    .video-box{
        height:1044px;
        background-color:#070708;
        margin-bottom:76px;
        color:#FFFFFF;
        text-align:center;
        h2{
          font-size:60px;
          padding-top:82px;
          margin-bottom:47px;
        }
        p{
          font-size:24px;
          margin-bottom:58px;
        }
        .video-bg{
          width:1226px;
          height:540px;
          background:url('/imgs/product/gallery-1.png') no-repeat center;
          background-size:cover;
          margin:0 auto 120px;
          cursor:pointer;
        }
        .video-content{
          @keyframes slideDown {
            from{
              top: -50%;
              opacity: 0;
            }
            to{
              top: 50%;
              opacity: 1;
            }
          }
          @keyframes slideUp {
            from{
              top: 50%;
              opacity: 1;
            }
            to{
              top: -50%;
              opacity: 0;
            }
          }
          .overlay{
            @include position(fixed);
            background-color: $colorI;
            opacity: .4;
            z-index: 10;            
          }
          .video{
            z-index: 10;
            position: fixed;
            top: -50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 1000px;
            height: 546px;
            opacity: 1;
            // transition: all .5s;
            // &.slide{
            //   top:50%;
            //   opacity: 1;
            // }
            &.slideDown{
              animation: slideDown .5s linear;
              top:50%;
            }
            &.slideUp{
              animation: slideUp .5s linear;
            }            
            video{
              width: 100%;
              height: 100%;
              object-fit: cover;
              outline: none;
            }
            .icon-close{
              position: absolute;
              top:20px;
              right:20px;
              z-index: 11;
              @include bgImg(20px,20px,'/imgs/icon-close.png');
              cursor: pointer;
            }

          }
        }
    }

  }
</style>


<script>
import ProductParam from '@/components/ProductParam';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'product',
  components:{
    swiper,
    swiperSlide,
    ProductParam
  },
  data(){
    return{
      swiperOption: {
        autoplay: true,
        slidesPerView:3,
        spaceBetween : 30,
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
      },
      showSlide:'',
      product:{}, // 产品信息
    }
  },
  mounted(){
    this.getProductInfo()
  },
  destroyed(){

  },
  methods:{
    getProductInfo(){
      let id = this.$route.params.id;
      this.axios.get(`/products/${id}`).then((res)=>{
        this.product = res
      })
    },
    closeVideo(){
      this.showSlide = 'slideUp'
      setTimeout(()=>{
        this.showSlide = ''
      },500)
    },
    buy(){
      this.$router.push(`/detail/${this.$route.params.id}`)
    }
  }
}
</script>
