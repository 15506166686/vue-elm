<template>
  <el-container class="userInfo-container rating_page">
    <el-header height="49px">
      <navbar :go-back="true" :head-title="headTitle"></navbar>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="24" class="info-row--inner">
          <div class="info-text">
            头像
          </div>
          <div class="info-detail">
            <img v-if="userInfo" class="info-avator" :src="imgBaseUrl + avatar" alt="username">

            <div class="info-indicator">
              <svg fill="currentColor" t="1598857171002" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="777" width="24" height="24" class="icon"><path d="M426.666667 277.12L661.546667 512 426.666667 746.88l-39.082667-39.082667L582.997333 512l-195.413333-195.84z" fill-rule="evenodd" p-id="778"></path></svg>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="info-row--inner">
          <div class="info-text">
            用户名
          </div>
          <div class="info-detail">
            <span class="info-username">xowen</span>

            <div class="info-indicator">
              <svg fill="currentColor" t="1598857171002" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="777" width="24" height="24" class="icon"><path d="M426.666667 277.12L661.546667 512 426.666667 746.88l-39.082667-39.082667L582.997333 512l-195.413333-195.84z" fill-rule="evenodd" p-id="778"></path></svg>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="info-row--inner">
          <div class="info-text">
            收获地址
          </div>
          <div class="info-detail">
            <div class="info-indicator">
              <svg fill="currentColor" t="1598857171002" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="777" width="24" height="24" class="icon"><path d="M426.666667 277.12L661.546667 512 426.666667 746.88l-39.082667-39.082667L582.997333 512l-195.413333-195.84z" fill-rule="evenodd" p-id="778"></path></svg>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="info-category">
        <el-col :span="24">
          <span class="info-category--text">账号绑定</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="info-row--inner">
          <div class="info-text">
            <svg fill="currentColor" t="1599978796950" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3524"><path d="M664.496 1024H359.584C280.32 1024 216.08 963.872 216.08 889.696V134.304C216.08 60.128 280.32 0 359.584 0h304.912C743.76 0 808 60.128 808 134.304V889.76c0 74.176-64.24 134.24-143.504 134.24z m-152.448-67.2a42.064 42.064 0 1 0-44.8-41.968 43.472 43.472 0 0 0 44.752 42.08zM736.256 134.192H287.824v671.52h448.432V134.192z" fill-rule="evenodd" fill="#0099F1" p-id="3525"></path></svg>
            <span>收获地址</span>
          </div>
          <div class="info-detail">
            <div class="info-indicator">
              <svg fill="currentColor" t="1598857171002" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="777" width="24" height="24" class="icon"><path d="M426.666667 277.12L661.546667 512 426.666667 746.88l-39.082667-39.082667L582.997333 512l-195.413333-195.84z" fill-rule="evenodd" p-id="778"></path></svg>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="info-category">
        <el-col :span="24">
          <span class="info-category--text">安全设置</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="info-row--inner">
          <div class="info-text">
            登录密码
          </div>
          <div class="info-detail">
            <span class="info-username">修改</span>
            <div class="info-indicator">
              <svg fill="currentColor" t="1598857171002" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="777" width="24" height="24" class="icon"><path d="M426.666667 277.12L661.546667 512 426.666667 746.88l-39.082667-39.082667L582.997333 512l-195.413333-195.84z" fill-rule="evenodd" p-id="778"></path></svg>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="userinfo-btn--row">
        <el-col :span="24">
          <el-button @click="userLogout" class="userinfo-btn--logout" type="danger">退出登录</el-button>
        </el-col>
      </el-row>
    </el-main>
    <transition name="toast" mode="in-out">
      <div v-show="toastShow"  class="userinfo-toast-container">
        <div class="userinfo-toast--inner">
          <div class="msg-icon">
            <svg t="1599186328801" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4160" width="48" height="48"><path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m51.2 819.2H460.8v-102.4h102.4z m0-204.8H460.8V204.8h102.4z" p-id="4161" fill="#f4ea2a"></path></svg>
          </div>
          <div class="msg-text">
            <span>是否退出登录</span>
          </div>
          <div class="msg-btn">
            <el-button type="info" @click="cancelLogout">再等等</el-button>
            <el-button type="danger" @click="outLogin">退出登录</el-button>
          </div>
        </div>
      </div>
    </transition>

<!--    <toast v-if="toastShow" :message="alertMsg" @closeToast="toastShow=!toastShow"></toast>-->
  </el-container>
</template>

<script>
  import Navbar from "@/components/common/NavBar/navbar";
  import Toast from "@/components/common/Toast/toast";
  import {getImgPath} from "@/utils/mixin";
  import {removeStore} from "@/utils/mUils";

  import {imgBaseUrl} from "@/config/env";
  import {mapState, mapMutations} from 'vuex'
  import {signout} from "@/network/getData";

  export default {
    name: "userInfo",
    components: {Toast, Navbar},
    data(){
      return {
        headTitle: "账号信息",
        avatar: null, // 用户头像
        toastShow: false, // 控制toast显示
        mobile: '', // 用户手机号
        imgBaseUrl
      }
    },
    mixins: [
      getImgPath
    ],
    methods: {
      ...mapMutations([
        'SAVE_AVANDER',
        'OUT_LOGIN'
      ]),
      // 退出登录
      userLogout(){
        //this.OUT_LOGIN()
        this.toastShow = true
      },
      outLogin(){
        removeStore('user_id')
        this.OUT_LOGIN()
        signout()
        this.$router.go(-1);
      },
      // 取消退出登录
      cancelLogout(){
        this.toastShow = false
      }
    },
    computed: {
      ...mapState([
        'userInfo',
        'imgPath'
      ])
    },
    watch: {
      userInfo(value){
        console.log(value)
        if (value && value.user_id) {
          this.username = value.username;
          this.mobile = value.mobile;
          this.avatar = value.avatar

        }
      }
    }
  }
</script>

<style scoped>
  .rating_page{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4000;
  }
  .el-header {
    background-color: #3190e8;
    color: #fff;
    text-align: center;
    font-size: 13px;
    padding: 0 8px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    margin-top: 49px;
    padding: 0px;
    overflow: hidden;
    height: calc(100vh - 49px - 49px);
  }

  .el-footer {
    padding: 0px;
  }
  .el-row {
    padding: 8px 8px;
    background: #fff;
    border-bottom: 1px solid #e4e4e4;
  }
  .el-row:nth-child(1) {
    margin-top: 10px;
  }

  .info-row--inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info-avator {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
  .info-text {
    font-size: 13px;
  }
  .info-text {
    display: flex;
    align-items: center;
  }
  .info-text svg {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  .info-text span {
    padding-left: 8px;
  }
  .info-indicator {
    color: #cccccc;
  }
  .info-detail {
    display: flex;
    align-items: center;
    color: #999;
    font-size: 13px;
  }
  .info-category {
    background: transparent;
    color: #666;
    font-size: 13px;
  }
  .userinfo-btn--row {
    background: transparent;
    margin-top: 10px;
    border-bottom: none;
  }
  .userinfo-btn--logout {
    width: 100%;
  }

  .userinfo-toast-container {
    position: relative;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 4000;
    background: rgba(0,0,0,0.4);
    animation: toastShow .1s;
  }
  .userinfo-toast--inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    z-index: 3000;
    width: 95%;
    min-height: 140px;
    padding: 20px;
    background: #fff;
    border-radius: 5px;

  }
  .msg-text {
    padding: 5px;
    font-size: 15px;
    margin-bottom: 40px;
  }
  .msg-btn {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
  }

  @keyframes toastShow{
    0%   { opacity: 0 }
    100% { opacity: 1 }
  }

  .toast-enter-active, .toast-leave-active {
    transition: all .3s;
    transform: scale(1);
  }
  .toast-enter, .toast-leave-to /* .toast-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: scale(0);
  }
</style>