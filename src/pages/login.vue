 <template>
  <div class="login">
    <div class="container">
      <a href="/index">
        <img src="/imgs/login-logo.png">
      </a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">账号登录</span>
            <span class="sep-line">|</span>
            <span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入账号" v-model="username">
          </div>
          <div class="input">
            <input type="text" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips" >
            <div class="sms">手机短信登录/注册</div>
            <div class="reg">
              立即注册
              <span>|</span>
              忘记密码？
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-top">
        <a href="http://www.baidu.com">百度一下，你就知道！</a><span>|</span>
        <a href="http://www.baidu.com">百度一下，你就知道！</a><span>|</span>
        <a href="http://www.baidu.com">百度一下，你就知道！</a><span>|</span>
        <a href="http://www.baidu.com">百度一下，你就知道！</a>
      </div>
      <div class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/config.scss';
@import '@/assets/scss/base.scss';
  .login{
    &>.container{
        height: 115px;
        img{
          width: auto;
          height: 100%;
        }  
      }
    .wrapper{
      background: url('/imgs/login-bg.jpg') no-repeat center;
        &>.container{
          height: 576px;
          position: relative;
          .login-form{
            width: 410px;
            height: 510px;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            background: $colorG;
            padding: 0 31px;
            box-sizing: border-box;
            h3{
              font-size: 24px;
              line-height: 24px;
              text-align: center;
              margin-top: 40px;
              margin-bottom: 49px;
              .sep-line{
                margin: 0 32px;
              }
              .checked{
                color: $colorA;
              }
            }
            .input{
              width: 348px;
              height: 50px;
              border: 1px solid $colorH;
              margin-bottom: 20px;
              input{
                width: 100%;
                height: 100%;
                padding: 18px;
              }
            }
            .btn-box{
              .btn{
                width: 100%;
                height: 50px;
                line-height: 50px;
                font-size: 16px;
                margin-top: 10px;
              }
            }
            .tips{
              display: flex;
              justify-content: space-between;
              margin-top: 14px;
              font-size: 14px;
              cursor:pointer;
              .sms{
                color: $colorA;
              }
              .reg{
                color: $colorD;
                span{
                  margin: 0 7px;
                }
              }
            }
          }
      }

    }
    .footer{
      height: 160px;
      text-align: center;
      color: $colorD;
      font-size: 16px;
      padding-top: 60px;
      .footer-top{
        a{
          color: $colorD;
          display: inline-block;
        }
        span{
          margin: 0 10px;
        }
      }
      .copyright{
        margin-top: 13px;
      }
    }
  }
  
</style>

<script>
export default {
  name:'login',
  components:{
   
  },
  data(){
    return{
      username:'',
      password:'',
      userId:''
    }
  },
  methods:{
    //登录
    login(){
      let { username, password } = this;
      
      this.axios.post('/user/login',{
        username,
        password
      }).then(res=>{
        this.$cookie.set('userId',res.id,{expires:'1M'})
        this.$store.dispatch('saveUsername', username)
        this.$router.push('/index')
      })
    },
    // 注册
    regist(){
      let { username, password } = this;
      
      this.axios.post('/user/register',{
        username,
        password
      }).then(res=>{
        console.log(res);
        
      })
    }

  }
}
</script>
