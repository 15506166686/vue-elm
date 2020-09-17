<template>
  <div>
    <div class="header-nav--bar">
      <div class="header-nav--left">
        <slot name='logo'></slot>
        <slot name="search"></slot>
        <span class="head-goBack" v-if="goBack" @click="$router.go(-1)">
          <svg t="1598857259055" fill="currentColor" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="913" width="24" height="24"><path d="M597.333333 277.12l39.04 39.04-195.413333 195.84 195.413333 195.797333-39.04 39.082667L362.453333 512z" fill-rule="evenodd" p-id="914"></path></svg>
        </span>
      </div>

      <div class="header-nav--center ellipsis">
        <span v-if="headTitle" class="header-nav--title">{{headTitle}}</span>
        <span v-if="locatedCity" class="header-nav--title" @click="cityRoute">{{locatedCity}}</span>
      </div>

      <div class="header-nav--right">
        <router-link :to="userInfo ? '/profile':'/login'" v-if='signinUp' class="navbar-link--router">
          <svg v-if="userInfo"  fill="currentColor" t="1599297971856" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4196" width="24" height="24"><path d="M867.328 790.592c-61.12-41.664-191.68-77.824-211.136-88.96s-38.848-19.456-38.848-55.488c0-36.096 19.776-55.232 47.232-80.64 51.52-47.488 41.6-101.376 74.944-126.4 27.328-20.416 40.96-36.16 45.248-66.752 0.704-4.544 1.152-9.728 1.344-15.488 0.064-2.368 0.576-3.968 0.576-6.656 0-47.232-38.848-47.232-38.848-47.232s0 1.344-13.888-76.352c-13.376-75.136-89.152-155.264-194.368-160.64L539.584 65.472c-2.112 0-3.968 0.192-6.016 0.256C531.84 65.664 530.112 65.472 528.32 65.472L528.32 65.92c-0.512 0-0.96 0.128-1.472 0.192C526.336 66.048 525.888 65.92 525.376 65.92L525.376 65.472c-1.792 0-3.52 0.192-5.248 0.256C518.144 65.664 516.224 65.472 514.112 65.472l0 0.512c-105.28 5.376-180.992 85.504-194.368 160.64C305.856 304.384 305.856 302.976 305.856 302.976s-38.848 0-38.848 47.232c0 2.624 0.512 4.224 0.576 6.656 0.256 5.76 0.704 10.944 1.344 15.488 4.288 30.592 17.92 46.336 45.248 66.752C347.52 464.128 337.6 518.016 389.12 565.504c27.52 25.344 47.232 44.48 47.232 80.64 0 36.032-19.456 44.352-38.848 55.488s-150.016 47.232-211.136 88.96S128 854.464 128 890.496C128 951.616 205.824 960 205.824 960l246.464 0 68.544 0 12.032 0 68.544 0 246.464 0c0 0 77.824-8.384 77.824-69.504C925.696 854.464 928.448 832.256 867.328 790.592z" fill-rule="evenodd" p-id="4197"></path></svg>
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
      },
      locatedCity: {
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
      ...mapActions(['getUserInfo']),
      cityRoute(){
        this.$router.push("/home")
      }
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

  .navbar-link--router {
    color: #fff;
  }
</style>