<template>
  <div class="detail">
    <div class="nav">
      <product-param :title="product.name"></product-param>
    </div>
    <div class="container">
      <div class="content">
        <div class="swiper-box">
          <swiper :options="swiperOption">
            <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <div class="product-box">
          <h2>{{product.name}}</h2>
          <p>
            相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红
            外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
          </p>
          <div class="shop">
            <span>小米自营</span>
          </div>
          <div class="price">
            <span class="new-price">{{product.price}}元</span><span class = "old-price">1999元</span>
          </div>
          <div class="address">
            <span class="icon-address"></span>
            北京 北京市 朝阳区 安定门街道
            <div class="stock"><span>有现货</span></div>
          </div>
          <h3>选择版本</h3>
          <div class="version-box">
            <a href="javascript:;" :class="version==1?'checked':''" @click="version=1">6GB+64GB 全网通</a>
            <a href="javascript:;" :class="version==2?'checked':''" @click="version=2">4GB+64GB 移动4G</a>
          </div>
          <h3>选择颜色</h3>
          <div class="color-box">
            <a href="javascript" class="checked">
              <span class="icon-color"></span>
               深空灰
            </a>
          </div>
          <div class="total-box">
            <p>  
              <span class="total-desc">{{product.name}} {{version==1?'6GB+64GB 全网通':'4GB+64GB 移动4G'}}</span>  <span class="total-price">{{product.price}}元</span></p>
            <div class="total-total">总计：{{product.price}}元</div>
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn btn-huge" @click="addCart">加入购物车</a>
          </div>
        </div>
      </div>
    </div>
    <div class="price-desc">
      <div class="container">
        <p>价格说明</p>
        <div class="desc-detail">
          <img src="/imgs/detail/item-price.jpeg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/config.scss';
@import '@/assets/scss/mixin.scss';
  .detail{
    &>.container{
      .content{
        display: flex;
        height: 800px;
        .swiper-box{
          width: 50%;
          height: 500px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .product-box{
          color: $colorB;
          h2{
            font-size: 25px;
          }
          h3{
            font-size: 20px;
          }
          &>p{
            font-size: 14px;
            margin-bottom: 15px;
          }
          .shop{
            color: $colorA;
            font-size: 18px;
            margin-bottom: 10px;
          }
          .price{
            padding-bottom: 10px;
            border-bottom: 1px solid #cccccc;
            span.new-price{
              color: $colorA;
              font-size: 20px;   
              font-weight: bold; 
              margin-right: 10px;        
            }
            span.old-price{
              color: $colorD;
              font-size: 18px;
              text-decoration: line-through;
            }
          }
          .address{
            height: 108px;
            background-color: #FAFAFA;
            border: 1px solid #E5E5E5;
            margin: 15px 0 25px;
            font-size: 14px;
            color: #666666;
            box-sizing: border-box;
            padding-top: 30px;
            padding-left: 30px;
            .icon-address{
              @include bgImg(20px,20px,'/imgs/detail/icon-loc.png');
              vertical-align: middle;
              margin-right: 7px;
            }
            .stock{
              color: $colorA;
              padding-left:32px;
              margin-top: 10px;
            }
          }
          .version-box{
            @include flex();
            margin: 20px 0 25px;
            a{
              display: block;
              height: 50px;
              line-height: 50px;
              width: 287px;
              color: #333333;
              font-size: 16px;
              border: 1px solid #E5E5E5;
              text-align: center;
              &.checked{
                color: $colorA;
                border: 1px solid $colorA;
              }
            }
          }
          .color-box{
            @include flex();
            margin: 20px 0 25px;
            a{
              display: block;
              height: 50px;
              line-height: 50px;
              width: 287px;
              color: #333333;
              font-size: 16px;
              border: 1px solid #E5E5E5;
              text-align: center;
              &.checked{
                color: $colorA;
                border: 1px solid $colorA;
              }
            }   
            .icon-color{
              display: inline-block;
              width: 14px;
              height: 14px;
              background-color: #666666;
            }         
          }
          .total-box{
            height: 108px;
            box-sizing: border-box;
            background-color: #FAFAFA;
            padding: 20px 30px;
            margin-bottom: 20px;
            &>p{
              font-size: 14px;
              color: #333333;
              @include flex();
              margin-bottom: 20px;
            }
            .total-total{
              font-size: 24px;
              color: $colorA;
            }
          }

        }
      }
    }
    .price-desc{
      height: 340px;
      background-color: #F3F3F3;
      padding-top: 30px;
      box-sizing: border-box;
      p{
        font-size: 25px;
        color: #333333;
      }
      img{
        margin-top:30px; 
      }
    } 
  }
</style>

<script>
import ProductParam from '@/components/ProductParam';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'detail',
  components:{
    swiper,
    swiperSlide,
    ProductParam
  },
  data(){
    return{
      swiperOption:{
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        }, 
      },
      productId:`${this.$route.params.id}`,// 产品的id
      product:{}, // 产品信息   
      version:1,
    }
  },
  mounted(){
    this.getProductInfo()
  },
  methods:{
    getProductInfo(){
      this.axios.get(`/products/${this.productId}`).then((res)=>{
        this.product = res
      })
    },
    addCart(){
      this.axios.post('/carts',{
        productId: this.productId,
        selected:true
      }).then((res={})=>{
        // 把添加的数据加到vuex中
        this.$store.dispatch('saveCartCount',res.cartTotalQuantity)
        // 跳转到购物车页面
        this.$router.push('/cart')
      })
    }
  }
}
</script>
