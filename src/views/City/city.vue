<template>

  <el-container>
    <el-header height="49px">
      <navbar :head-title="cityName" :go-back="true">
        <router-link to="/home" slot="changeCity" class="city-text--changeCity">切换城市</router-link>
      </navbar>
    </el-header>
    <el-main>
      <scroll :probe-type="3" ref="scroll" class="city-scroll--wrapper">
        <el-row class="city-row">
          <el-col :span="24" class="city-input--location">
            <el-input v-model="inputValue" clearable placeholder="输入学校、商务楼、地址"></el-input>
          </el-col>
          <el-col :span="24">
            <el-button type="primary" class="city-btn--submit" :loading="isLoading" :disabled="isDisabled" @click="searchPosi">提交</el-button>
          </el-col>
        </el-row>
        <el-row class="city-row city-row--searchResult">

          <ul class="city-list--searchResult">
            <li v-for="(item, index) in placeList" :key="index">
              <h4 class="city-list--position ellipsis">{{item.name}}</h4>
              <p class="city-list--address ellipsis">{{item.address}}</p>
            </li>
          </ul>
          <div class="city-text--noResult" v-if="placeNone">
              <p class="city-list--address ellipsis">很抱歉！无搜索结果</p>
          </div>
        </el-row>
      </scroll>
    </el-main>
  </el-container>
</template>

<script>
  /* 引入相关网络请求 */
  import {currentCity, searchPlace} from "@/network/getData";

  /* 引入相关组件 */
  import Navbar from "@/components/common/NavBar/navbar";
  import Scroll from "@/components/common/Scroll/scroll";

  export default {
    name: "city",
    components: {Scroll, Navbar},
    data(){
      return  {
        cityID:'', // 当前城市id
        cityName:'', // 当前城市名字
        placeList:[], // 搜索城市列表
        placeHistory:[], // 历史搜索记录
        historyTitle: true, // 默认显示搜索历史头部，点击搜索后隐藏
        placeNone: false, // 搜索无结果，显示提示信息
        inputValue: '',  // 搜索的地址
        disabled: true, // 提交按钮是否禁用
        isLoading: false  // 提交按钮是否开启加载动画
      }
    },
    mounted(){
      // 获取路由路径的CityId
      this.cityID = this.$route.params.cityId
      // 获取当前城市名字
      currentCity(this.cityID).then(data => {
        console.log(data)
        this.cityName = data.name
      })
    },
    methods: {
      // 搜索地址
      searchPosi(){
        this.isLoading = true
        searchPlace(this.cityID, this.inputValue).then(data => {
          if(data){
            this.isLoading = false
            this.placeList = data
            this.placeNone = data.length ? false : true
          }
        })
      },
      // 刷新better-scroll
      updateBSHeight(){
        // console.log('--')
        this.$refs.scroll.refresh()
        // console.log(this.$refs.scroll.scrollerHeight);
      }
    },
    computed: {
      // 输入框有值才允许提交按钮
      isDisabled(){
        return !(this.inputValue.length > 0)
      }
    },
    updated(){
      this.updateBSHeight()
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
  }


  .city-text--changeCity {
    color: #fff;
  }

  .city-row {
    padding: 0 15px;
  }

  .city-input--location {
    margin-top: 10px;
  }
  .city-btn--submit {
    margin-top: 10px;
    width: 100%;
  }

  .city-row--searchResult {
    padding: 0;
    background: #fff;
  }

  .city-list--searchResult {
    list-style: none;
  }
  .city-list--searchResult li {
    padding: 10px 15px;
    border-bottom: 1px solid #e4e4e4;
  }
  .city-list--position {
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
  }
  .city-list--address {
    font-size: 12px;
    line-height: 20px;
    color: #999;
  }

  .city-scroll--wrapper {
    height: calc(100vh - 49px);
  }
  .city-text--noResult {
    padding: 15px 15px;
  }
</style>