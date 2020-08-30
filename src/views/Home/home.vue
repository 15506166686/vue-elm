<template>
  <div>
    <el-container>
      <el-header height="49px">
        <navbar :signin-up="true">
          <div slot="logo">饿了么</div>
        </navbar>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="home-nav--locatedCity">
              <span>当前定位城市：</span>
              <span>定位不准时，请在城市列表中选择</span>
            </div>
          </el-col>
          <el-col :span="24">
            <router-link :to="{path: 'city', query: {city: guessCityId  }}">
              <div class="home-nav--guessCity">
                <span>{{guessCity}}</span>
                <svg class="" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z" fill-rule="evenodd"></path></svg>
              </div>
            </router-link>
          </el-col>
        </el-row>
        <citycard :cities="hotCity" :is-hot-city="true"><span slot="title">热门城市</span></citycard>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  /* 引入相关网络请求 */
  import {cityGuess, currentCity, hotCity, groupCity} from "@/network/getData";

  /* 引入相关组件 */
  import Navbar from "@/components/common/NavBar/navbar";
  import Citycard from "@/views/Home/Childcomps/citycard";



  export default {
    name: "home",
    components: {Citycard, Navbar},
    data(){
      return {
        guessCity: '',   //当前城市
        guessCityId: '', //当前城市id
        hotCity: [],     //热门城市列表
        groupCity: {},   //所有城市列表
      }
    },
    created(){

    },
    mounted(){
      // 获取当前城市
      cityGuess().then(data => {
        this.guessCity = data.name
        this.guessCityId = data.id
      })
      // 获取热门城市
      hotCity().then(data => {
        this.hotCity = data
      })
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 10px;
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
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    margin-top: 49px;
    padding: 0px;

  }

  .home-nav--locatedCity {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 10px 8px;
    color: #666;
  }

  .home-nav--guessCity {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 8px;
    color: #3190e8;
    background: #fff;
    font-size: 13px;
  }

</style>