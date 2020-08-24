
<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tips>
        <span class="tips">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="cart-wrapper">
      <div class="container">
        <div class="cart-list">
          <ul class="list-header">
            <li class="col-1"><span :class="selectedAll?'icon-check':'icon-uncheck'" @click="toggleAll"></span>全选</li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-items" v-for="(item,index) in cartProductVoList" :key="index">
            <li class="icon-check1"><span :class="item.productSelected?'icon-check':'icon-uncheck'" @click="updateCart(item)"></span></li>
            <li class="item-name">
              <!-- <span class="item-img" :style="`@include bgImg(80px,80px,'${item.productMainImage}');`"></span> -->
              <img :src="item.productMainImage" alt="">
              <span>{{item.productName}} , {{item.productSubtitle}}</span> 
            </li>
            <li class="item-price">{{item.productPrice}}</li>
            <li class="item-count">
              <div>
                <a href="javascript:;" @click="updateCart(item,'-')">-</a>
                <span>{{item.quantity}}</span>
                <a href="javascript:;" @click="updateCart(item,'+')">+</a>
              </div>
            </li>
            <li class="item-total">{{item.productTotalPrice}}元</li>
            <li class="item-operation">
              <span class="icon-close" @click="delProduct(item)"></span>
            </li>
          </ul>
        </div>
        <div class="cart-footer clearfix">
          <div class="cart-footer-left fl">
            <a href="javascript:;">继续购物</a>
             共<span>{{cartTotalQuantity}}</span>件商品，已选择<span>{{checkedNum}}</span>件
          </div>
          <div class="cart-footer-right fr">
            合计：<span>{{cartTotalPrice}}</span>元
            <a href="javascript:;" class="btn btn-large" @click="order">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/config.scss';
  .cart{
    .tips{
      font-size: 14px;
      color: #999999;
    }
    .cart-wrapper{
      background-color: #F5F5F5;
      padding-bottom: 80px;
      .container{
        .cart-list{
          background-color: #ffffff;
          .list-header{
            height: 79px;
            line-height: 79px;
            display: flex;
            text-align: center;
            font-size: 14px;
            color: #999999;
            .icon-check{
              display: inline-block;
              height: 20px;
              width: 20px;
              background: url('/imgs/icon-gou.png')  no-repeat center;
              background-color: $colorA;
              background-size: 16px 12px;
              vertical-align: middle;
              margin-right: 17px;
            }
            .icon-uncheck{
                display: inline-block;
                height: 20px;
                width: 20px;
                border: 1px solid #e5e5e5;
                vertical-align: middle;
                margin-right: 17px;   
              }
            .col-1{
              flex: 1;
            }
            .col-2{
              flex: 2;
            }
            .col-3{
              flex: 3;
            }
          }
          .cart-items{
            display: flex;
            height: 126px;
            align-items: center;
            text-align: center;
            border-top: 1px solid #e5e5e5;
            .icon-check1{
              flex: 1;              
              .icon-check{
                display: inline-block;
                height: 20px;
                width: 20px;
                background: url('/imgs/icon-gou.png')  no-repeat center;
                background-color: $colorA;
                background-size: 16px 12px;
                vertical-align: middle;
                margin-right: 17px;   
              }
              .icon-uncheck{
                display: inline-block;
                height: 20px;
                width: 20px;
                border: 1px solid #e5e5e5;
                vertical-align: middle;
                margin-right: 17px;   
              }
            }
            .item-name{
              flex: 3;
              font-size: 18px;
              color: #333333;
              box-sizing: border-box;
              display: flex;
              align-items: center;
              img{
                width: 80px;
                height: 80px;
                // @include bgImg(80px,80px,'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1551869450.61563110.jpg');
                vertical-align: middle;
              }
              span{
                margin-left: 30px;
              }
            }
            .item-price{
              flex: 1;
              font-size: 16px;
              color: #333333;
            }
            .item-count{
              flex: 2;
              div{
                font-size: 14px;
                color: #333333;
                width: 150px;
                height: 50px;
                line-height: 50px;
                border: 1px solid #e5e5e5;
                display: inline-block;
                a{
                  display: inline-block;
                  color: #333333;
                  width: 50px;
                  cursor: pointer;
                }
                span{
                  display: inline-block;
                  width: 50px;
                }
              }
            }
            .item-total{
              flex: 1;
              font-size: 18px;
              color: $colorA;
            }
            .item-operation{
              flex: 1;
              height: 12px;
              .icon-close{
                @include bgImg(14px,12px,'/imgs/icon-close.png');
                cursor: pointer;
              }
            
            }
          }
          
        }
        .cart-footer{
          margin-top: 20px;
          height: 50px;
          line-height: 50px;
          color: #666666;
          font-size: 14px;
          margin-left: 20px;
          .cart-footer-left{
            a{
              color: #666666;
              font-size: 14px;
              cursor: pointer;
              margin-right: 20px;
            }
            span{
              color: $colorA;
              margin: 0 5px;
            }
          }
          .cart-footer-right{
            font-size: 14px;
            color: $colorA;
            span{
              font-size: 24px;
              margin: 0 2px;
            }
            a{
              margin-left: 30px;
            }

          }

        }
      }
    }
  }
</style>

<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'
export default {
  name:'home',
  components:{
    OrderHeader,NavFooter
  },
  data(){
    return{
      cartProductVoList:[], //购物车商品列表
      cartTotalPrice:0, //总金额
      cartTotalQuantity:0, // 总数量
      selectedAll: false, // 是否全选,
      checkedNum: 0, // 被选中数量
    }
  },
  mounted(){
    this.getCartInfo()
  },
  methods:{
    // 获取购物车所有信息
    getCartInfo(){
      this.axios.get('/carts').then((res)=>{
        this.renderData(res)
      })
    },
    renderData(res){
      this.cartProductVoList = res.cartProductVoList
      this.cartTotalPrice = res.cartTotalPrice
      this.cartTotalQuantity = res.cartTotalQuantity
      this.selectedAll = res.selectedAll
      this.checkedNum = this.cartProductVoList.filter(item=>item.productSelected).length
    },
    toggleAll(){
      let path = this.selectedAll?'/carts/unSelectAll':'/carts/selectAll'
      this.axios.put(path).then((res)=>{
        this.renderData(res)
      })
    },
    updateCart(item,type){
      let quantity = item.quantity,
          selected = item.productSelected;
      if(type === '-'){
        if(quantity === 1){
          alert('至少保留一件商品')
          return
        }
        --quantity
      }else if(type === '+'){
        if(quantity > item.productStock){
          alert('已经最大了~')
          return
        }
        ++quantity
      }else{
        selected = !item.productSelected
      }
      this.axios.put(`/carts/${item.productId}`,{
        quantity,
        selected
      }).then(res=>{
        this.renderData(res)
      })
    },
    delProduct(item){
      this.axios.delete(`/carts/${item.productId}`).then(res=>{
        this.renderData(res)
      })
    },
    //结算
    order(){
      let flag = this.cartProductVoList.every(item=>!item.productSelected)
      if(flag){
        alert('至少选中一个商品！')
        return
      }else{
        this.$router.push('/order/confirm')
      }
    }
  }
}
</script>
