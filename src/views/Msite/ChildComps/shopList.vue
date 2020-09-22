<template>
  <div class="shopList-container">
    <loading-up v-if="isLoading"></loading-up>
    <el-row class="shop-row--container" v-for="item in shopListArr">
      <el-col :span="4" class="shop-info--img">
        <img src="~@/assets/images/activity.png" alt="shop_img">
      </el-col>
      <el-col :span="20" class="shop-info--details">
        <div class="shop-info--header">
          <h4 :class="item.is_premium? 'premium': ''" class="shop-info--title ellipsis">{{item.name}}</h4>
          <ul class="shop-info--supports">
            <li v-for="item in item.supports" :key="item.id" class="info-supports--item">{{item.icon_name}}</li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import LoadingUp from "@/components/content/Loading/loadingForElm";
  import {imgBaseUrl} from "@/config/env";
  import {shopList} from "@/network/getData";

  export default {
    name: "shopList",
    components: {LoadingUp},
    data(){
      return {
        offset: 0,
        shopListArr: [], // 店铺列表数据
        isLoading: true,
        imgBaseUrl
      }
    },
    props: ['restaurantCategoryId', 'restaurantCategoryIds', 'sortByType', 'deliveryMode', 'supportIds', 'confirmSelect', 'geoHash'],
    mounted(){
      this.loadData()
    },
    computed: {
    ...mapState([
        'latitude','longitude'
      ])
    },
    methods: {
      loadData(){
        this.isLoading = true
        console.log(this.latitude,this.longitude, this.offset)
        this.offset += 20
        shopList(this.latitude, this.longitude, this.offset, this.restaurantCategoryId).then(data => {
          this.shopListArr = data
          this.isLoading = false
        })
      }
    },
    updated(){
      this.$emit("refreshScroll")
    }
  }
</script>

<style scoped>
  .shop-row--container {
    padding: 10px 0px;
    border-bottom: 1px solid #e4e4e4;
  }
  .shop-info--img {

  }
  .shop-info--img img {
    width: 60px;
    height: 60px;
  }
  .shop-info--details {
    padding-left: 10px;
  }
  .shop-info--header {
    display: flex;
    justify-content: space-between;
  }
  .premium::before{
    content: '品牌';
    display: inline-block;
    font-size: 12px;
    line-height: 12px;
    color: #333;
    background-color: #ffd930;
    padding: 1px 3px;
    border-radius: 2px;
    margin-right: 2px;

  }
  .shop-info--title {
    color: #333;

    font-weight: 700;

  }
  .shop-info--supports {
    display: flex;

    list-style: none;
  }
  .info-supports--item {
    font-size: 0.5rem;
    border: 1px solid #f1f1f1;
    padding: 0 1px;
    border-radius: 1px;
    margin-left: 1px;
  }
</style>