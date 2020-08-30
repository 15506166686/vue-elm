<template>
  <header>
    <div class="header-nav-bar">
      <div header-nav-left>
        <slot name='logo'></slot>

        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
          </svg>
        </section>

      </div>

      <div class="header-nav-center">
        <slot name='search'></slot>
      </div>

      <div class="header-nav-right">
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
        <slot name="changecity"></slot>
        <slot name="changeLogin"></slot>
      </div>
    </div>
  </header>
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
        type: Boolean,
        default(){
          return false
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
  .header-nav-bar {
    display: flex;
    height: 49px;
    line-height: 49px;
  }

  .header-nav-center {
    flex: 1 1;
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
</style>