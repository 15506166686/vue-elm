<template>
  <el-container>
    <el-header height="49px">
      <navbar :signinUp="true" :located-city="msiteTitle">
        <div slot="search">
          <router-link class="msite-link--text" :to="{path: '/search'}">
            <svg fill="currentColor" t="1599894131209" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2719" ><path d="M400.696889 801.393778A400.668444 400.668444 0 1 1 400.696889 0a400.668444 400.668444 0 0 1 0 801.393778z m0-89.031111a311.637333 311.637333 0 1 0 0-623.331556 311.637333 311.637333 0 0 0 0 623.331556z" p-id="2720"></path><path d="M667.904 601.998222l314.766222 314.823111-62.919111 62.976-314.823111-314.823111z" p-id="2721" fill-rule="evenodd"></path></svg>
          </router-link>
        </div>
      </navbar>
    </el-header>
    <el-main>
      <msite-swiper :goods-type="goodsType"></msite-swiper>
    </el-main>
    <el-footer height="49px">
      <main-foot-nav></main-foot-nav>
    </el-footer>
  </el-container>
</template>

<script>

  /* 引入相关网络请求 */
  import {cityGuess, msiteAddress, msiteFoodTypes} from "@/network/getData";
  /* 引入相关组件 */
  import MainFootNav from "@/components/content/FootNav/mainFootNav";
  import Navbar from "@/components/common/NavBar/navbar";

  import {mapMutations} from 'vuex'
  import MsiteSwiper from "@/views/Msite/ChildComps/msiteSwiper";

  export default {
    name: "msite",
    components: {MsiteSwiper, Navbar, MainFootNav},
    data(){
      return {
        geoHash: '', // city页面传递过来的地址geohash
        msiteTitle: '请选择地址...', // msite页面头部标题
        hasGetData: false, //, 是否已经获取地理位置数据，成功之后再获取商铺列表信息
        goodsType: [] // 导航食品类型
      }
    },
    async created(){
      if(!this.$route.query.geoHash){
        // 用 await 防止异步数据错误
        await cityGuess().then(data => {
          this.geoHash = data.latitude + ',' + data.longitude
        })
      }else{
        this.geoHash = this.$route.query.geoHash
      }
      // 保存geohash 到vuex
      this.SAVE_GEOHASH(this.geoHash)
      // 获取位置信息
      msiteAddress(this.geoHash).then(data => {
        this.msiteTitle = data.name
      })
    },
    mounted(){
      // 获取导航食品类型列表
      msiteFoodTypes(this.geoHash).then(data => {
        let tempStack = []
        console.log(data)
        for (let i = 0; i < data.length; i++ ){
          tempStack.push(data[i])
          if((i+1) % 8 === 0) {
            this.goodsType.push(tempStack)
            tempStack = []
          }
        }
      })
    },
    // 保存geohash 到vuex
    methods: {
      ...mapMutations(
        ['RECORD_ADDRESS',
        'SAVE_GEOHASH'])
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
  .msite-link--text {
    color: #fff;

  }
  .msite-link--text .icon {
    width: 20px;
    height: 20px;
  }
</style>