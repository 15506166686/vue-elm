<template>
  <el-container>
    <el-header height="49px">
      <navbar :go-back="true" :head-title="headTitle"></navbar>
    </el-header>
    <el-main>
      <el-row class="login-input--loginForm">
        <el-col :span="24">
          <el-input
              placeholder="账号"
              v-model="userAccount"
              clearable>
          </el-input>
          <el-input
              placeholder="密码"
              v-model="passWord"
              show-password>
          </el-input>
        </el-col>
      </el-row>
      <el-row class="login-input-mobileCode">
        <el-col :span="12">
          <el-input
              placeholder="验证码"
              v-model="mobileCode"
              clearable>
          </el-input>
        </el-col>
        <el-col :span="12">
          <div class="login-btn--changeCode">
            <img  v-if="captchaCodeImg" class="login-img--changeCode" :src="captchaCodeImg" alt="captchaCodeImg">
            <div class="login-text--changeCode">
              <span>看不清</span>
              <span>换一张</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-alert
            title="温馨提示：未注册过的账号，登录时将自动注册，注册过的用户可凭账号密码登录"
            type="warning"
            :closable="false"
            show-icon>
        </el-alert>
      </el-row>
      <el-row class="login-row--submit">
        <el-col :span="24">
          <el-button class="login-btn--signUp" type="success" @click="mobileLogin">登录</el-button>
        </el-col>
      </el-row>
      <el-row class="login-row--resetPd">
        <el-col :span="24">
          <span>重置密码</span>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  /* 引入相关网络请求 */
  import {getcaptchas} from "@/network/getData";

  /* 引入相关组件 */
  import Navbar from "@/components/common/NavBar/navbar";


  export default {
    name: "login",
    components: {Navbar},
    data(){
      return {
        headTitle: '密码登录', // 导航栏标题
        userAccount: '', // 用户账号
        passWord: '', // 用户密码
        mobileCode: '', // 验证码
        captchaCodeImg: null, // 验证码地址
        alertMsg: '', // 提示信息
      }
    },
    methods: {
      mobileLogin(){
        if (!this.userAccount) {
          this.alertMsg = '请输入手机号/邮箱/用户名';

          return
        }else if(!this.passWord){
          this.alertMsg = '请输入密码';

          return
        }else if(!this.mobileCode){
          this.alertMsg = '请输入验证码';

          return
        }
      },
      msgTips() {
        this.$message({
          showClose: true,
          message: this.alertMsg,
          type: 'error'
        });
      }
    },
    created(){
      // 获取验证码
      getcaptchas().then(data => {
       this.captchaCodeImg = data.code
      })

    }
  }
</script>

<style>
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

  .el-row {
    margin-bottom: 10px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    margin-top: 49px;
    padding: 0px;
    overflow: hidden;
    height: calc(100vh - 49px);
  }

  .login-input--loginForm {
    margin-top: 10px;
    margin-bottom: 0;
  }

  .login-input--loginForm input {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #e4e4e4;
  }

  .login-input-mobileCode {
    padding: 0;
    margin: 0;
  }
  .login-input-mobileCode {
    padding: 0;
    margin: 0;
  }
  .login-input-mobileCode input {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #e4e4e4;
  }
  .login-btn--changeCode {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 10px;
    background: #fff;
  }

  .login-text--changeCode {
    flex: 1 1;
  }
  .login-text--changeCode span {
    display: block;
    font-size: 12px;
    text-align: center;
    padding: 0;
    margin: 0;

  }
  .login-btn--signUp {
    width: 100%;
  }
  .login-row--submit,.login-row--resetPd {
    padding: 0 15px;
  }
  .login-row--resetPd span{
    font-size: 12px;
    float: right;
    color: #3190e8;
  }
  /*.login-img--changeCode {*/
  /*  height: 20px;*/
  /*}*/
</style>