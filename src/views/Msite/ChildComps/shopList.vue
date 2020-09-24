<template>
  <div class="shopList-container">
    <loading-up class="main-loading" v-show="isLoading"></loading-up>
    <el-row class="shop-row--container" v-for="item in shopListArr" :key="item._id">
      <el-col :span="4" class="shop-info--img">
        <img :src="imgBaseUrl + item.image_path" alt="shop_img">
      </el-col>
      <el-col :span="20" class="shop-info--details">
        <div class="shop-info--header">
          <h4 :class="item.is_premium? 'premium': ''" class="shop-info--title ellipsis">{{item.name}}</h4>
          <ul class="shop-info--supports">
            <li v-for="item in item.supports" :key="item.id" class="info-supports--item">{{item.icon_name}}</li>
          </ul>
        </div>
        <div class="shop-starAndOrder">
          <div class="shop-star--inner">
            <rating-star :rating="item.rating"></rating-star>
            <span class="shop-text--score">{{item.rating}}</span>
            <span class="shop-text--orderNumMonth">月售{{item.recent_order_num}}单</span>
          </div>
          <div class="shop-delivery">
            <span class="delivery-style rating-delivery-left" v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
            <span class="delivery-style rating-delivery-right" v-if="zhunshi(item.supports)">准时达</span>
          </div>
        </div>
        <div class="shop-timeAndPrice">
          <p class="fee">
            ¥{{item.float_minimum_order_amount}}起送
            <span class="segmentation">/</span>
            {{item.piecewise_agent_fee.tips}}
          </p>
          <p class="distance-time">
            <span v-if="Number(item.distance)">{{item.distance > 1000? (item.distance/1000).toFixed(2) + 'km': item.distance + 'm'}}</span>
            <span v-else>{{item.distance}}</span>
            <span class="segmentation">/</span>
            <span class="shop-orderTime">{{item.order_lead_time}}</span>
          </p>
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
  import RatingStar from "@/views/Msite/ChildComps/ratingStar";

  export default {
    name: "shopList",
    components: {RatingStar, LoadingUp},
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
     async loadData(){
        this.isLoading = true
       console.log(this.isLoading)
        this.offset += 20
        await shopList(this.latitude, this.longitude, this.offset, this.restaurantCategoryId).then(data => {
          this.shopListArr.push(...data)
        })
       this.isLoading = false

      },
      zhunshi(supports){
        let zhunStatus;
        if ((supports instanceof Array) && supports.length) {
          supports.forEach(item => {
            if (item.icon_name === '准') {
              zhunStatus = true;
            }
          })
        }else{
          zhunStatus = false;
        }
        return zhunStatus
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
    height: 60px;
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
    font-size: 0.75rem;
  }
  .shop-info--supports {
    display: flex;
    list-style: none;
    height: 100%;
  }
  .info-supports--item {
    font-size: 0.4rem;
    color: #999;
    border: 0.025rem solid #f1f1f1;
    padding: 0 0.04rem;
    border-radius: 0.08rem;
    margin-left: 0.05rem;
  }
  .shop-starAndOrder {
    display: flex;

    justify-content: space-between;
    align-items: center;
  }
  .shop-star--inner {
    display: flex;
    font-size: 0.55rem;
    align-items: center;
  }
  .shop-text--score {
    padding-left: 8px;
    color: #ff6000;
  }
  .shop-text--orderNumMonth {
    padding-left: 8px;
    font-size: 0.4rem;
    color: #666;
  }
  .shop-delivery {
    display: flex;
    align-items: center;
    transform: scale(.7);
    min-width: 5rem;
    justify-content: flex-end;
    margin-right: -0.8rem;
  }
  .delivery-style {
    font-size: 0.4rem;
    padding: 0.04rem 0.08rem 0;
    border-radius: 0.08rem;
    margin-left: 0.08rem;
    border: 1px;
  }
  .rating-delivery-left {
    color: #fff;
    background-color: #3190e8;
    border: 0.025rem solid #3190e8;
  }
  .rating-delivery-right {
    color: #3190e8;
    border: 0.025rem solid #3190e8;
  }
  .shop-timeAndPrice {
    display: flex;
    justify-content: space-between;
  }
  .fee {
    font-size: 0.4rem;
    color: #666;
  }
  .distance-time {
    color:#999;
    font-size: 0.4rem;
  }
  .shop-orderTime {
    color: #3190e8;
    font-size: 0.4rem;
  }

</style>