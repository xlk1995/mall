<template>

  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>
            购物车({{cartCount}})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>

                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a :href="'/product/'+item.id" target="_blank">
                    <div class="product-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="product-name">{{item.name}}</div>
                    <div class="product-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>

          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>

                <li class="product">
                  <a href="">
                    <div class="product-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="product-name">小米壁画电视 65英寸</div>
                    <div class="product-price">6999元</div>
                  </a>
                </li>
               
                <li class="product">
                  <a href="">
                    <div class="product-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <div class="product-name">小米全面屏电视E55A</div>
                    <div class="product-price">1999元</div>
                  </a>
                </li>
               
                <li class="product">
                  <a href="">
                    <div class="product-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="">
                    </div>
                    <div class="product-name">小米电视4A 32英寸</div>
                    <div class="product-price">699元</div>
                  </a>
                </li>
              
                <li class="product">
                  <a href="">
                    <div class="product-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="product-name">小米电视4A 55英寸</div>
                    <div class="product-price">1799元</div>
                  </a>
                </li>
                               <li class="product">
                  <a href="">
                    <div class="product-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <div class="product-name">小米电视4A 65英寸</div>
                    <div class="product-price">2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="">
                    <div class="product-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="">
                    </div>
                    <div class="product-name">查看全部</div>
                    <div class="product-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style lang="scss" scoped>

@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background: #333333;
      color: #b0b0b0;
      .container{
        @include flex();
        a{
          color: #b0b0b0;
          display: inline-block;
          margin-right: 17px;
        }
        .my-cart{
          width: 117px;
          background-color: #ff6600;
          text-align: center;
          color: #ffffff;
          .icon-cart{
            @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
            margin-right: 4px;

          }
        }

      }
    }
    .nav-header{
      background-color: #ffffff;
      .container{
        height: 112px;
        position: relative;
        @include flex();

        .header-menu{
          display: inline-block;
          padding-left: 209px;
          width: 643px;
          line-height: 112px;
          box-sizing: border-box;
          .item-menu{
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            margin-right: 20px;
            span{
              cursor: pointer;
            }
            &:hover{
              color:$colorA;
              .children{
                height: 220px;
                opacity: 1;
              }
            }
            .children{
              position: absolute;
              top: 112px;
              left: 0;
              width: $min-width;
              height: 0px;
              opacity: 0;
              overflow: hidden;
              border-top:1px solid #E5E5E5;
              box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              transition:all .5s;
              z-index: 10;
              background: #ffffff;
              .product{
                width: 16.6%;
                height: 220px;
                font-size:12px;
                line-height: 12px;
                text-align: center;
                float: left;
                position: relative;
                a{
                  display: inline-block;
                }
                img{
                  width: auto;
                  height: 111px;
                  margin-top:26px;
                }
                .product-img{
                  height: 137px;
                }
                .product-name{
                  font-weight: bold;
                  color: $colorB;
                  margin-top: 19px;
                  margin-bottom:8px;
                }
                .product-price{
                  color: $colorA;
                }
                &:before{
                  content: " ";
                  border-left:1px solid $colorF;
                  width: 1px;
                  height: 100px;
                  position: absolute;
                  top: 28px;
                  right: 0;
                }
                &:last-child:before{
                  display: none;
                }
              }
            }
          } 
        }
        .header-search{
          font-size: 20px;
          .wrapper{
            box-sizing: border-box;
            width: 319px;
            height: 52px;
            border: 1px solid #E0E0E0;
            @include flex();
            display: flex;
            justify-content: space-between;
            align-items: center;
            input{
              box-sizing: border-box;
              width: 264px;
              height: 50px;
              border: none;
              border-right: 1px solid #E0E0E0;
              padding-left: 14px;
              
            }
            a{
              @include bgImg(18px,18px,'/imgs/icon-search.png');
              margin-right: 17px;
            }
          }
        }
      }

    }
  }
</style>

<script>
import {mapState,mapActions} from 'vuex';

export default {
  name:'nav-header',
  data(){
    return{
      phoneList:[]
    }
  },
  methods:{
    ...mapActions(['saveUsername','saveCartCount']),
    getProductList(){
      this.axios.get('/products',{
        params:{
          categoryId: '100012',
          pageSize: '6'
        }
      }).then(res=>{
        let list = res.list
        if(list.length>=6){
          this.phoneList = list.slice(0,6)
        }else{
          this.phoneList = list
        }
        
      })
    },
    goToCart(){
      this.$router.push('/cart')
    },
    login(){
      this.$router.push('/login')
    },
    // 退出
    logout(){
      // 调用后台的退出方法
      this.axios.post('/user/logout').then(res=>{
        this.$message.success('退出成功')
        // 把cookie清空
        this.$cookie.set('userId','',{expires:'-1'})
        // 把vuex中数据清空
        this.saveUsername('')
        this.saveCartCount('0')
      })
    },
    getUser(){
      this.axios.get('/user').then((res={})=>{
        let {username} = res
        // this.$store.dispatch('saveUsername',username)
        this.saveUsername(username)
      })
    },
    // 获取商品总和
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        // to-do 保存到vuex中
        // this.$store.dispatch('saveCartCount',res)
        this.saveCartCount(res)
      })
    }
  },
  mounted(){
    let params = this.$route.params.from
    if(params === 'login'){
      this.getUser()
      this.getCartCount()
    }
    this.getProductList()

  },
  filters:{
    currency(val){
      if (!val) return 0.00;
      return "￥" + val.toFixed(2) + "元"
    }
  },
  computed:{
    ...mapState(['username','cartCount'])
    // username(){
    //   return this.$store.state.username
    // },
    // cartCount(){
    //   return this.$store.state.cartCount
    // }
  }
}
</script>
