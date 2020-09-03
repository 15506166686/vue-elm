<template>
  <div>
    <div class="header-nav--bar">
      <div class="header-nav--left">
        <slot name='logo'></slot>
        <span class="head-goBack" v-if="goBack" @click="$router.go(-1)">
          <svg t="1598857259055" fill="currentColor" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="913" width="24" height="24"><path d="M597.333333 277.12l39.04 39.04-195.413333 195.84 195.413333 195.797333-39.04 39.082667L362.453333 512z" fill-rule="evenodd" p-id="914"></path></svg>
        </span>
      </div>

      <div class="header-nav--center">
        <slot name="search"></slot>
        <span v-if="headTitle" class="header-nav--title">{{headTitle}}</span>

      </div>

      <div class="header-nav--right">
        <router-link :to="userInfo ? '/profile':'/login'" v-if='signinUp' class="head_login">
          <svg class="user_avatar" v-if="userInfo">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
          </svg>
          <div class="login_span" v-else>
            <span>登录</span>
            <span>注册</span>
          </div>
        </router-link>

        <slot name="edit"></slot>
        <slot name="msite-title"></slot>
        <slot name="changeCity"></slot>
        <slot name="changeLogin"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: "navbar",
    props: {
      goBack: {
        type: Boolean,
        default(){
          return false
        }
      },
      signinUp: {
        type: Boolean,
        default() {
          return false;
        }
      },
      headTitle: {
        type: String,
        default(){
          return ''
        }
      }
    },
    mounted(){
      //获取用户信息
      this.getUserInfo();
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      ...mapActions(['getUserInfo'])
    }
  }
</script>

<style scoped>
  .header-nav--bar {
    display: flex;
    height: 49px;
    align-items: center;
  }

  .header-nav--left {
    width: 80px;
    text-align: left;
  }

  .header-nav--right {
    width: 80px;
    text-align: right;
  }

  .header-nav--center {
    flex: 1 1;
    text-align: center;
  }

  .login_span {
    color: #fff;
  }
  .login_span > span:first-child::after {
    display: inline-block;
    content: "";
    width: 1px;
    height: 20px;
    margin: -5px 5px;
    background: #fff;
    line-height: 20px;
  }

  .header-nav--title {
    font-size: 14px;
    font-weight: 600;
  }
</style>