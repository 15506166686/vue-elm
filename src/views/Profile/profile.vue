<template>
  <el-container>
    <el-header height="49px">
      <navbar :go-back="true" :head-title="headTitle"></navbar>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <div class="my-header--container">
            <router-link :to="userInfo && userInfo.user_id ? '/profile/userinfo' : '/login'">
              <div class="my-header--userInfo">
                <img v-if="userInfo && userInfo.user_id" class="my-header--userAvatar" :src="imgPath" alt="userimg">
                <img v-else src="~@/assets/images/default.png" class="my-header--userAvatar" alt="userimg">
                <div class="my-header--text">
                  <span class="my-header--login">{{username}}</span>
                  <span class="my-header--notice">
                    <svg fill="currentColor" t="1599373211523" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5888" width="12" height="12"><path d="M736 0 288 0c-52.8 0-96 43.2-96 96l0 832c0 52.8 43.2 96 96 96l448 0c52.8 0 96-43.2 96-96L832 96C832 43.2 788.8 0 736 0zM384 48l256 0 0 32L384 80 384 48zM512 960c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64S547.346 960 512 960zM768 768 256 768 256 128l512 0L768 768z" p-id="5889" fill-rule="evenodd"></path></svg>
                     {{mobile}}
                  </span>
                </div>
                <div class="my-header--indicator">
                  <svg fill="currentColor" t="1598857171002" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="777" width="24" height="24" class="icon"><path d="M426.666667 277.12L661.546667 512 426.666667 746.88l-39.082667-39.082667L582.997333 512l-195.413333-195.84z" fill-rule="evenodd" p-id="778"></path></svg>
                </div>
              </div>
            </router-link>
          </div>
        </el-col>
      </el-row>
      <el-row class="my-info--userAssets">
        <el-col class="my-info--infoCard" :span="8">
          <span class="my-info--assetsNumber">
            <b class="balance">0.00</b>
            元
          </span>
          <span class="my-info--assetsCategory">
            我的余额
          </span>
        </el-col>
        <el-col class="my-info--infoCard" :span="8">
          <span class="my-info--assetsNumber">
            <b class="coupon">0</b>
            个
          </span>
          <span class="my-info--assetsCategory">
            我的优惠
          </span>
        </el-col>
        <el-col class="my-info--infoCard" :span="8">
          <span class="my-info--assetsNumber">
            <b class="score">0</b>
            元
          </span>
          <span class="my-info--assetsCategory">
            我的积分
          </span>
        </el-col>
      </el-row>
      <el-row class="my-list--service">
        <el-col :span="24">
          <router-link class="my-list--serviceLink" :to="'/order'">
            <div class="my-list--icon">
              <svg t="1599567584614" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12879" width="24" height="24"><path d="M620.8 563.2H395.52c-17.92 0-32-14.08-32-32s14.08-32 32-32H620.8c17.92 0 32 14.08 32 32s-14.08 32-32 32z" fill="#515151" p-id="12880"></path><path d="M232.32 523.52m-53.76 0a53.76 53.76 0 1 0 107.52 0 53.76 53.76 0 1 0-107.52 0Z" fill="#515151" p-id="12881"></path><path d="M784.64 807.68H395.52c-17.92 0-32-14.08-32-32s14.08-32 32-32h389.12c17.92 0 32 14.08 32 32s-14.08 32-32 32z" fill="#515151" p-id="12882"></path><path d="M232.32 768m-53.76 0a53.76 53.76 0 1 0 107.52 0 53.76 53.76 0 1 0-107.52 0Z" fill="#515151" p-id="12883"></path><path d="M232.32 279.68m-53.76 0a53.76 53.76 0 1 0 107.52 0 53.76 53.76 0 1 0-107.52 0Z" fill="#515151" p-id="12884"></path><path d="M887.04 319.36H395.52c-17.92 0-32-14.08-32-32s14.08-32 32-32h491.52c17.92 0 32 14.08 32 32s-14.08 32-32 32z" fill="#515151" p-id="12885"></path></svg>
            </div>
            <div class="my-list--text">我的订单</div>
            <div class="my-list--indicator">
              <svg fill="currentColor" t="1598857171002" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="777" width="24" height="24" class="icon"><path d="M426.666667 277.12L661.546667 512 426.666667 746.88l-39.082667-39.082667L582.997333 512l-195.413333-195.84z" fill-rule="evenodd" p-id="778"></path></svg>
            </div>
          </router-link>
        </el-col>
        <el-col :span="24">
          <router-link class="my-list--serviceLink" :to="'/order'">
            <div class="my-list--icon">
              <svg t="1599567623371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13688" width="24" height="24"><path d="M71.68 102.4m81.92 0l716.8 0q81.92 0 81.92 81.92l0 686.08q0 81.92-81.92 81.92l-716.8 0q-81.92 0-81.92-81.92l0-686.08q0-81.92 81.92-81.92Z" fill="#FF7A45" p-id="13689"></path><path d="M87.04 409.6A87.04 87.04 0 0 1 0 322.56V204.8h1024v117.76a87.04 87.04 0 1 1-174.08 0 87.04 87.04 0 1 1-174.08 0 87.04 87.04 0 0 1-163.84 40.99072A87.04 87.04 0 0 1 348.16 322.56a87.04 87.04 0 1 1-174.08 0A87.04 87.04 0 0 1 87.04 409.6z" fill="#CF5A1A" p-id="13690"></path><path d="M849.92 61.44h92.16a81.92 81.92 0 0 1 81.92 81.92v128a87.04 87.04 0 1 1-174.08 0V61.44z" fill="#FFBB96" p-id="13691"></path><path d="M675.84 61.44h174.08v209.92a87.04 87.04 0 1 1-174.08 0V61.44z" fill="#FF7A45" p-id="13692"></path><path d="M501.76 61.44h174.08v209.92a87.04 87.04 0 1 1-174.08 0V61.44z" fill="#FFBB96" p-id="13693"></path><path d="M348.16 61.44h174.08v209.92a87.04 87.04 0 1 1-174.08 0V61.44z" fill="#FF7A45" p-id="13694"></path><path d="M174.08 61.44h174.08v209.92a87.04 87.04 0 1 1-174.08 0V61.44z" fill="#FFBB96" p-id="13695"></path><path d="M81.92 61.44h92.16v209.92a87.04 87.04 0 1 1-174.08 0V143.36a81.92 81.92 0 0 1 81.92-81.92z" fill="#FF7A45" p-id="13696"></path><path d="M256 573.44h296.96v204.8H256z" fill="#FFBB96" p-id="13697"></path><path d="M225.28 778.24m30.72 0l296.96 0q30.72 0 30.72 30.72l0 0q0 30.72-30.72 30.72l-296.96 0q-30.72 0-30.72-30.72l0 0q0-30.72 30.72-30.72Z" fill="#CF5A1A" p-id="13698"></path><path d="M225.28 512m30.72 0l296.96 0q30.72 0 30.72 30.72l0 0q0 30.72-30.72 30.72l-296.96 0q-30.72 0-30.72-30.72l0 0q0-30.72 30.72-30.72Z" fill="#CF5A1A" p-id="13699"></path></svg>
            </div>
            <div class="my-list--text">积分商城</div>
            <div class="my-list--indicator">
              <svg fill="currentColor" t="1598857171002" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="777" width="24" height="24" class="icon"><path d="M426.666667 277.12L661.546667 512 426.666667 746.88l-39.082667-39.082667L582.997333 512l-195.413333-195.84z" fill-rule="evenodd" p-id="778"></path></svg>
            </div>
          </router-link>
        </el-col>
        <el-col :span="24">
          <router-link class="my-list--serviceLink" :to="'/order'">
            <div class="my-list--icon">
              <svg t="1599568383185" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19424" width="24" height="24"><path d="M692.14 478.32L512 152.39 331.86 478.32 93.21 326 199.9 742.83a15 15 0 0 0 14.53 11.28h595.14a15 15 0 0 0 14.53-11.28L930.79 326zM217.79 815.39h588.43q15 0 15 15v57.29q0 15-15 15H217.79q-15 0-15-15v-57.29q0-15 15-15z" fill="#FE6A00" p-id="19425"></path><path d="M31 326.04a62.21 62.21 0 1 0 124.42 0 62.21 62.21 0 1 0-124.42 0z m837.58 0a62.21 62.21 0 1 0 124.42 0 62.21 62.21 0 1 0-124.42 0zM447.93 152.39a64.07 64.07 0 1 0 128.14 0 64.07 64.07 0 1 0-128.14 0z" fill="#FE6A00" p-id="19426"></path></svg>
            </div>
            <div class="my-list--text">饿了么会员卡</div>
            <div class="my-list--indicator">
              <svg fill="currentColor" t="1598857171002" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="777" width="24" height="24" class="icon"><path d="M426.666667 277.12L661.546667 512 426.666667 746.88l-39.082667-39.082667L582.997333 512l-195.413333-195.84z" fill-rule="evenodd" p-id="778"></path></svg>
            </div>
          </router-link>
        </el-col>
      </el-row>
      <el-row class="my-list--otherService">

        <el-col :span="24">
          <router-link class="my-list--serviceLink" :to="'/order'">
            <div class="my-list--icon">
              <svg t="1599568493157" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20453" width="24" height="24"><path d="M222 645.5c10.8 0 20 9.2 20 20v100c0 10.8-9.2 20-20 20h-20c-10.8 0-20-9.2-20-20v-100c0-10.8 9.2-20 20-20h20m0-80h-20c-55 0-100 45-100 100v100c0 55 45 100 100 100h20c55 0 100-45 100-100v-100c0-55-45-100-100-100zM822 645.5c10.8 0 20 9.2 20 20v100c0 10.8-9.2 20-20 20h-20c-10.8 0-20-9.2-20-20v-100c0-10.8 9.2-20 20-20h20m0-80h-20c-55 0-100 45-100 100v100c0 55 45 100 100 100h20c55 0 100-45 100-100v-100c0-55-45-100-100-100z" fill="#4A5FE2" p-id="20454"></path><path d="M252 570.5v-72c0-143.4 116.6-260 260-260s260 116.6 260 260v72h80v-72c0-45.7-9-90.2-26.9-132.1-17.2-40.4-41.7-76.8-73-108s-67.6-55.8-108-73c-41.9-17.8-86.4-26.9-132.1-26.9-45.7 0-90.2 9-132.1 26.9-40.4 17.2-76.8 41.7-108 73s-55.8 67.6-73 108C181 408.3 172 452.8 172 498.5v72h80z" fill="#4A5FE2" p-id="20455"></path><path d="M431 765.5m-50 0a50 50 0 1 0 100 0 50 50 0 1 0-100 0Z" fill="#7C44E2" p-id="20456"></path></svg>
            </div>
            <div class="my-list--text">服务中心</div>
            <div class="my-list--indicator">
              <svg fill="currentColor" t="1598857171002" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="777" width="24" height="24" class="icon"><path d="M426.666667 277.12L661.546667 512 426.666667 746.88l-39.082667-39.082667L582.997333 512l-195.413333-195.84z" fill-rule="evenodd" p-id="778"></path></svg>
            </div>
          </router-link>
        </el-col>
        <el-col :span="24">
          <router-link class="my-list--serviceLink" :to="'/order'">
            <div class="my-list--icon">
              <svg t="1599568559952" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22201" width="24" height="24"><path d="M102.4 0h819.2c56.32 0 102.4 46.08 102.4 102.4v819.2c0 56.32-46.08 102.4-102.4 102.4H102.4c-56.32 0-102.4-46.08-102.4-102.4V102.4c0-56.32 46.08-102.4 102.4-102.4z" fill="#2295FF" p-id="22202"></path><path d="M519.68 696.32c-76.8 3.84-143.36-40.96-172.8-102.4-32-67.84-25.6-134.4 19.2-193.28 43.52-56.32 104.96-79.36 176.64-70.4 35.84 3.84 66.56 19.2 94.72 40.96 15.36 12.8 14.08 17.92-2.56 26.88-14.08 7.68-28.16 16.64-43.52 24.32-39.68 23.04-79.36 44.8-117.76 69.12-20.48 12.8-25.6 33.28-12.8 53.76 12.8 23.04 37.12 28.16 62.72 12.8 76.8-43.52 153.6-88.32 231.68-131.84 12.8-7.68 14.08-14.08 8.96-26.88-20.48-42.24-49.92-78.08-88.32-104.96-87.04-57.6-180.48-67.84-275.2-23.04-94.72 43.52-147.2 121.6-154.88 224-7.68 84.48 25.6 156.16 87.04 215.04 87.04 81.92 231.68 94.72 330.24 29.44 25.6-16.64 25.6-16.64 10.24-43.52-17.92-28.16-34.56-33.28-65.28-19.2-29.44 11.52-58.88 20.48-88.32 19.2z" fill="#FFFFFF" p-id="22203"></path><path d="M785.92 569.6c-1.28-20.48-12.8-37.12-21.76-53.76-2.56-5.12-7.68-3.84-12.8-1.28-17.92 10.24-35.84 20.48-53.76 29.44-7.68 3.84-8.96 8.96-5.12 16.64 10.24 16.64 20.48 33.28 29.44 51.2 3.84 7.68 8.96 8.96 16.64 5.12 10.24-6.4 21.76-12.8 32-20.48 11.52-6.4 16.64-15.36 15.36-26.88z" fill="#FFFFFF" p-id="22204"></path></svg>
            </div>
            <div class="my-list--text">下载饿了么app</div>
            <div class="my-list--indicator">
              <svg fill="currentColor" t="1598857171002" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="777" width="24" height="24" class="icon"><path d="M426.666667 277.12L661.546667 512 426.666667 746.88l-39.082667-39.082667L582.997333 512l-195.413333-195.84z" fill-rule="evenodd" p-id="778"></path></svg>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </el-main>
    <el-footer height="49px">
      <main-foot-nav></main-foot-nav>
    </el-footer>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
    {{imgPath}}
  </el-container>
</template>

<script>
  import Navbar from "@/components/common/NavBar/navbar";
  import MainFootNav from "@/components/content/FootNav/mainFootNav";
  import {getStore} from "@/utils/mUils";

  import {mapState} from 'vuex'
  import {imgBaseUrl} from "@/config/env";

  export default {
    name: "profile",
    components: {MainFootNav, Navbar},
    data(){
      return {
        headTitle: '我的',
        username: '登录/注册',
        mobile: '暂无绑定手机号',  //电话号码
        imgBaseUrl,
        imgPath: null
      }
    },
    mounted(){
      this.initData()
    },
    computed:{
      ...mapState([
        'userInfo'
      ])
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      initData(){
        if(this.userInfo && this.userInfo.user_id){
          this.imgPath = imgBaseUrl + this.userInfo.avatar
          this.username = this.userInfo.username
        }else {
          this.username = '登录/注册'
        }
      }
    },
    watch: {
      userInfo() {
        this.initData()
      }
    }
  }
</script>

<style scoped>
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
  .my-header--container {
    background: #3190e8;
    padding: 0px 8px;
  }
  .my-header--userInfo {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    align-items: center;
  }
  .my-header--userAvatar {
    width: 49px;
    height: 49px;
    border-radius: 50%;
  }

  .my-header--text {
    display: flex;
    flex-direction: column;
    padding: 8px 8px;
    flex: 1 1;
  }
  .my-header--login {
    font-weight: bold;
    color: #fff;
    padding-left: 3px;
    font-size: 16px;
  }
  .my-header--notice {
    display: flex;
    padding-top: 4px;
    color: #fff;
    font-size: 12px;
  }
  .my-header--indicator {
    color: #fff;
  }
  .my-info--userAssets {
    padding: 0px 8px;
    background: #fff;
  }
  .my-info--infoCard {
    text-align: center;
    padding: 18px 0px;
  }
  .my-info--infoCard span{
    display: block;
  }
  .my-info--infoCard:not(:last-child) {
    border-right: 1px solid #f1f1f1;
  }
  .my-info--assetsNumber {
    font-size: 13px;
  }
  .my-info--assetsNumber b{
    display: inline-block;
    font-size: 23px;
    font-weight: 700;
    line-height: 1rem;
    font-family: Helvetica Neue,Tahoma;
  }
  .my-info--assetsCategory {
    padding-top: 15px;
    font-size: 12px;
    color: #666;
  }
  .balance {
    color: #f90;
  }
  .coupon {
    color: #ff5f3e;
  }
  .score {
    color: #6ac20b;
  }
  .my-list--service {
    padding: 0px 8px;
    margin-top: 10px;
    background: #fff;
  }
  .my-list--otherService {
    padding: 0px 8px;
    margin-top: 10px;
    background: #fff;
  }
  .my-list--serviceLink {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #e4e4e4;
  }

  .my-list--text {
    flex: 1 1;
    text-indent: 10px;
  }

  .router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }

  /*.my-info--infoCard:not(:last-child):after{*/
  /*  display: inline-block;*/
  /*  content: "";*/
  /*  width: 1px;*/
  /*  height: 20px;*/
  /*  margin: -2px 2px;*/
  /*  background: red;*/
  /*  line-height: 20px;*/
  /*}*/
</style>