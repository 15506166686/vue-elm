<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>

import {getStore, setStore} from "@/utils/mUils";

export default {
  name: 'App',
  created(){
    if (getStore('elm_store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(getStore('elm_store'))))
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
      setStore('elm_store', JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>
  @import "assets/css/base.css";
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>