<template>
  <div class="toast-container">
    <div class="toast">
      <div class="msg-icon">
        <svg t="1599186328801" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4160" width="48" height="48"><path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m51.2 819.2H460.8v-102.4h102.4z m0-204.8H460.8V204.8h102.4z" p-id="4161" fill="#f4ea2a"></path></svg>
      </div>
      <div class="msg-text">
        <span>{{message}}</span>
      </div>
      <div class="msg-btn" @click="closeToast">
        确定
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "toast",
    props: {
      message: {
        type: String,
        default: ''
      }
    },
    methods: {
      closeToast(){
        this.$emit("closeToast")
      }
    }
  }
</script>

<style scoped>
  .toast-container {
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
  .toast {
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
    text-align: center;
    width: 100%;
    background: rgb(76,217,100);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 10px 0;
    color: #fff;
    font-weight: bold;
  }
  @keyframes toastShow{
    0%   { opacity: 0 }
    100% { opacity: 1 }
  }
</style>