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
      <scroll  class="msite-scroll--content" :probeType="3" @pullingUp="loadMoreShop" :pullUpload="true" ref="msiteScroll">
        <msite-swiper :goods-type="goodsType"></msite-swiper>
        <el-row>
          <el-col :span="24" class="msite-icon--mall">
            <svg fill="currentColor" t="1600699679168" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3937" ><path d="M734.336 515.413333a154.752 154.752 0 0 0 153.685333 23.296c8.533333-3.370667 17.834667 1.706667 19.797334 9.898667l0.384 3.2v316.202667c0 36.992-29.482667 67.285333-67.029334 70.4l-6.357333 0.256-231.424-0.042667v-207.146667a36.608 36.608 0 0 0-32-36.352l-4.565333-0.256h-140.117334a36.608 36.608 0 0 0-36.608 36.608l-0.042666 207.146667L189.184 938.666667c-38.4 0-69.888-28.373333-73.088-64.554667l-0.298667-6.101333v-316.202667c0-10.026667 10.581333-16.896 20.224-13.098667 50.773333 20.053333 110.208 11.946667 153.6-23.338666a15.189333 15.189333 0 0 1 19.114667 0 154.581333 154.581333 0 0 0 193.664 0.085333 15.274667 15.274667 0 0 1 19.2 0 154.581333 154.581333 0 0 0 193.621333-0.042667 15.189333 15.189333 0 0 1 19.114667 0zM831.317333 85.333333c4.565333 0 8.746667 2.133333 11.392 5.589334l1.706667 2.858666L938.666667 405.333333c0 63.573333-51.925333 105.813333-116.48 106.666667a117.930667 117.930667 0 0 1-98.858667-51.029333 7.168 7.168 0 0 0-11.776 0.170666c-46.762667 67.797333-147.797333 67.754667-194.517333 0a7.210667 7.210667 0 0 0-11.861334 0c-46.677333 67.712-147.797333 67.84-194.517333-0.042666a7.210667 7.210667 0 0 0-11.904 0A117.845333 117.845333 0 0 1 201.557333 512C136.96 512 93.013333 479.445333 85.333333 405.333333l92.501334-311.552a14.165333 14.165333 0 0 1 9.728-8.064L190.890667 85.333333h640.426666zM789.333333 268.202667H265.173333a27.477333 27.477333 0 0 0-27.178666 23.381333l-0.298667 4.053333v6.058667c0 13.781333 10.154667 25.173333 23.424 27.136l4.053333 0.298667h524.117334c13.824 0 25.173333-10.154667 27.178666-23.381334l0.298667-4.053333v-6.058667a27.434667 27.434667 0 0 0-27.477333-27.434666z" p-id="3938" fill-rule="evenodd"></path></svg>
            <span class="msite-shop--text">附近商家</span>
          </el-col>
        </el-row>
        <el-row class="msite-list--shop">
          <el-col>
            <shop-list ref="shopList" :geo-hash="geoHash" @refreshScroll="refreshScroll"></shop-list>
          </el-col>
        </el-row>
      </scroll>
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
  import scroll from "@/components/common/Scroll/scroll";
  import {mapMutations} from 'vuex'
  import MsiteSwiper from "@/views/Msite/ChildComps/msiteSwiper";
  import ShopList from "@/views/Msite/ChildComps/shopList";

  export default {
    name: "msite",
    components: {ShopList, MsiteSwiper, Navbar, MainFootNav, scroll},
    data(){
      return {
        geoHash: '', // city页面传递过来的地址geohash
        msiteTitle: '请选择地址...', // msite页面头部标题
        hasGetData: false, //, 是否已经获取地理位置数据，成功之后再获取商铺列表信息
        goodsType: [], // 导航食品类型
        isLoading: true,
        offset: 0, // 商品偏移值
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
        this.RECORD_ADDRESS(data) // 记录位置
      })
    },
    mounted(){
      // 获取导航食品类型列表
      msiteFoodTypes(this.geoHash).then(data => {
        let tempStack = []
        for (let i = 0; i < data.length; i++ ){
          tempStack.push(data[i])
          if((i+1) % 8 === 0) {
            this.goodsType.push(tempStack)
            tempStack = []
          }
        }
        this.loadedData()
      })
    },
    // 保存geohash 到vuex
    methods: {
      ...mapMutations(
        ['RECORD_ADDRESS',
        'SAVE_GEOHASH']),
      loadedData(){
        this.isLoading = false
      },
      // 更新scroll
      refreshScroll(){
        this.$refs.msiteScroll.refresh()
      },
      // 加载更多数据
      async loadMoreShop(){
        console.log("加载更多shop")
        // this.offset += 20
        // console.log('offset: '+ this.offset)
        await this.$refs.shopList.loadData()
        this.$refs.msiteScroll.finishPullUp()
        this.refreshScroll()
        // setTimeout(() => {
        //
        //   this.scroll.refresh()
        // })
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
    padding: 0px;
  }
  .el-row {
    margin-top: 10px;
    padding: 10px 8px;
    background: #fff;
  }
  .msite-list--shop {
    margin: 0px !important;
  }
  .msite-scroll--content {
    height: calc(100vh - 49px);
  }
  .msite-icon--mall {
    color: #999;
    display: flex;
    align-items: center;
  }
  .msite-icon--mall svg {
    width: 12px;
    height: 12px;
    color: #999;
    display: inline-block;
  }
  .msite-shop--text {
    display: inline-block;
    font-size: 13px;
    padding-left: 8px;

  }
  .msite-link--text {
    color: #fff;
  }
  .msite-link--text .icon {
    width: 20px;
    height: 20px;
  }
</style>