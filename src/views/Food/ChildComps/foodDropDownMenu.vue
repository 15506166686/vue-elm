<template>
  <div class="food-dropdown-menu">
    <el-row class="dropdown-menu--container">
      <el-col v-for="(food,index) in foodTypes" :key="food.name" @click.native="itemClick(index,food.name)" :class="{active:index === nowIndex}" class="menu-list--item" :span="8">
        <div class="menu-header">
          <span class="menu-list--text">{{food.name}}</span>
          <svg :class="{arrowRotate: index === nowIndex}" fill="currentColor" t="1601133486660" class="icon" viewBox="0 0 2048 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3128" ><path d="M863.172608 966.656c82.5344 75.776 218.7264 76.5952 302.08 1.4336L2007.185408 213.1968C2095.249408 134.3488 2032.375808 0 1907.857408 0H140.433408C16.119808 0-46.344192 133.12 39.876608 212.3776l823.296 754.4832z" p-id="3129"  fill-rule="evenodd"></path></svg>
        </div>
      </el-col>
    </el-row>
    <el-row class="food-nav--type">
      <transition v-show="sortBy" v-for="(food) in foodTypes" :key="food.name" name="showlist">
        <div v-show="food.name === sortBy" class="menu-list--container">
          <h1>Hello world! {{food.name}}</h1>
        </div>
      </transition>
    </el-row>

  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "foodDropdownMenu",
    props: {
      foodTypes: {
        type: Array,
        default(){
          return []
        }
      }
    },
    computed: {
      ...mapState(['latitude','longitude'])
    },
    data(){
      return {
        nowIndex: -1, // 当前选择
        counter: 0,
        sortBy: '',
        geoHash: "", // city页面传递过来的地址geohash
      }
    },
    methods: {
      // 切换选项卡
      itemClick(index,type){
        if(this.sortBy !== type){
          this.sortBy = type
          this.nowIndex = index
        }else {
          this.sortBy = ''
          this.nowIndex = -1
          this.$emit("recoverTitle")
        }
      }
    }
  }
</script>

<style scoped>
  .food-dropdown-menu {
    position: relative;

  }
  .dropdown-menu--container {
    padding: 0 8px;
    z-index: 1000;
    position: relative;
    height: 39px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e1e1e1;
  }
  .menu-list--item {
    font-size: 0.4rem;
    padding: 5px;
    text-align: center;
  }

  .menu-list--item {

  }
  .active{
    color: #3190e8;
  }
  .menu-list--item{
    border-left: 1px solid #e1e1e1;

  }
  .menu-list--item:first-child{
    border-left: none;
  }
  .menu-list--item svg {
    width: 0.4rem;
    height: 0.4rem;
    margin-left: 4px;
    transition: all 0.3s;
  }
  .arrowRotate {
    transform: rotateZ(180deg);
  }
  .food-nav--type {
    width: 100%;
    position: relative;
    height: calc(100vh - 49px - 49px - 49px);
    display: flex;
    z-index: 0;
    overflow: hidden;
  }
  .menu-list--container {
    position: absolute;
    padding: 20px;
    width: 100%;

    background: rgba(0,0,0,0.2);
  }
  .showlist-enter-active,
  .showlist-leave-active {
    transition: all 0.3s;
    transform: translateY(0);
  }
  .showlist-enter,
  .showlist-leave-active {
    opacity: 0;
    transform: translateY(-100%);
  }
  /*@keyframes arrowRotateAni {*/
  /*  0% {*/
  /*    transform: rotateZ(0deg);*/
  /*  }*/
  /*  100% {*/
  /*    transform: rotateZ(180deg);*/
  /*  }*/
  /*}*/
  .showcover-enter-active,
  .showcover-leave-active {
    transition: opacity 0.3s;
  }
  .showcover-enter,
  .showcover-leave-active {
    opacity: 0;
  }

</style>