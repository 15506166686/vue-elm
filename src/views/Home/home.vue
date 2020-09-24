<template>
  <div>
    <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
    <el-container>
      <el-header height="49px">
        <navbar :signin-up="true">
          <div slot="logo">饿了么</div>
        </navbar>
      </el-header>
      <el-main>
        <scroll :pull-upload="true" ref="scroll" class="home-nav--content" :probe-type="3">
          <el-row>
            <el-col :span="24">
              <div class="home-nav--locatedCity">
                <span>当前定位城市：</span>
                <span>定位不准时，请在城市列表中选择</span>
              </div>
            </el-col>
            <el-col :span="24">
              <router-link :to="{path: 'city/'+ guessCityId}">
                <div class="home-nav--guessCity">
                  <span>{{guessCity}}</span>
                  <svg fill="currentColor"  t="1598857171002" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="777" width="24" height="24"><path d="M426.666667 277.12L661.546667 512 426.666667 746.88l-39.082667-39.082667L582.997333 512l-195.413333-195.84z" fill-rule="evenodd" p-id="778"></path></svg>
                </div>
              </router-link>
            </el-col>
          </el-row>
          <citycard :cities="hotCity" :is-hot-city="true"><span slot="title">热门城市</span></citycard>
          <div class="home-list--groupCity" v-for="(cities,key,index) of sortGroupCity" :key="key">
            <citycard :cities="cities">
              <span slot="title">{{key}} <span v-if="index === 0">（按字母排序）</span></span>
            </citycard>
          </div>
        </scroll>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  /* 引入相关网络请求 */
  import {cityGuess, hotCity, groupCity} from "@/network/getData";

  /* 引入相关组件 */
  import Navbar from "@/components/common/NavBar/navbar";
  import Citycard from "@/views/Home/Childcomps/citycard";
  import Scroll from "@/components/common/Scroll/scroll";
  import Loading from "@/components/common/Loading/loading";

  import {_debounce} from "@/utils/mUils";

  export default {
    name: "home",
    components: {Loading, Scroll, Citycard, Navbar},
    data(){
      return {
        guessCity: '',   //当前城市
        guessCityId: '', //当前城市id
        hotCity: [],     //热门城市列表
        groupCity: {},   //所有城市列表
        isLoading: true, //加载动画
      }
    },
    created(){

    },
    methods: {

      // 获取数据
      getData(){
        // 获取当前城市
        let data1 =cityGuess().then(data => {
          this.guessCity = data.name
          this.guessCityId = data.id
        })
        // 获取热门城市
        let data2 = hotCity().then(data => {
          this.hotCity = data
        })
        // 获取所有城市
        let data3 = groupCity().then(data => {
          this.groupCity = data
        })

        return Promise.all([data1,data2,data3])
      }
    },
    mounted(){

      // 关闭加载动画
      this.getData().then(()=>{
        this.isLoading = false
        this.$refs.scroll.refresh
      })

    },
    computed: {
      //将获取的数据按照A-Z字母开头排序
      sortGroupCity(){
        let sortObj = {};
        /* ascii码 65是A 90是Z */
        for (let i = 65; i <= 90; i++) {
          if (this.groupCity[String.fromCharCode(i)]) {
            sortObj[String.fromCharCode(i)] = this.groupCity[String.fromCharCode(i)];
          }
        }
        return sortObj
      }
    },
    beforeDestroy(){
      this.$refs.scroll.destroy()
    },
    updated(){
      // 刷新better-scroll
      const updateBSHeight =  _debounce(this.$refs.scroll.refresh)
      updateBSHeight()
    }
  }
</script>

<style>
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
    z-index: 9;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    margin-top: 49px;
    padding: 0px;
    overflow: hidden;
  }

  .home-nav--locatedCity {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 10px 8px;
    color: #666;
    border-bottom: 1px solid #e4e4e4;
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

  .home-nav--content {
    height: calc(100vh - 49px);
  }

  .home-list--groupCity {
    background: #fff;
  }

</style>