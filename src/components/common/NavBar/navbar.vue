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
          <span class="login_span" v-else>登录|注册</span>
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
    background: #3190e8;
    font-size: 12px;
    color: #fff;
    line-height: 49px;
    padding: 0 8px;
  }

  .header-nav-center {
    flex: 1 1;
  }

  .login_span {
    color: #fff;
  }
</style>