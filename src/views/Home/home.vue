<template>
  <div>
    <navbar :signin-up="true">
      <div slot="logo">饿了么</div>
    </navbar>

    <nav class="city_nav">
      <div class="city_tip">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <router-link :to="'/city/' + guessCityid" class="guess_city">
        <span>{{guessCity}}</span>
        <svg class="arrow_right">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
        </svg>
      </router-link>
    </nav>

  </div>
</template>

<script>
  import {request} from "@/network/request";
  import Navbar from "@/components/common/NavBar/navbar";

  export default {
    name: "home",
    components: {Navbar},
    created(){
      request({
        url: 'v1/cities',
        params: {
          type: 'guess'
        }
      }).then(data => {
        console.log(data)
      })
    }
  }
</script>

<style scoped>

</style>