<template>
  <el-container>
    <el-header height="49px">
      <navbar :go-back="true" :head-title="headTitle"></navbar>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <div class="my-header--container">
            <router-link :to="'/profile'">
              <div class="my-header--userInfo">
                <img  class="my-header--userAvatar" src="https://avatars0.githubusercontent.com/u/25549238?s=88&u=1bbd88d645785b87a6cf4eb2ef88739774f21b60&v=4" alt="">
                <div class="my-header--text">
                  <span class="my-header--login">登录/注册</span>
                  <span class="my-header--notice">
                    <svg fill="currentColor" t="1599373211523" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5888" width="12" height="12"><path d="M736 0 288 0c-52.8 0-96 43.2-96 96l0 832c0 52.8 43.2 96 96 96l448 0c52.8 0 96-43.2 96-96L832 96C832 43.2 788.8 0 736 0zM384 48l256 0 0 32L384 80 384 48zM512 960c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64S547.346 960 512 960zM768 768 256 768 256 128l512 0L768 768z" p-id="5889" fill-rule="evenodd"></path></svg>
                     暂无绑定手机号
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

            </div>
            <div class="my-list--text">fdsa</div>
            <div class="my-list--indicator">fsda</div>
          </router-link>
        </el-col>
      </el-row>
    </el-main>

    <el-footer height="49px">

    </el-footer>
  </el-container>
</template>

<script>
  import Navbar from "@/components/common/NavBar/navbar";
  export default {
    name: "profile",
    components: {Navbar},
    data(){
      return {
        headTitle: '我的'
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
    background: #ff8198;
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
  .my-list--serviceLink {
    display: flex;
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