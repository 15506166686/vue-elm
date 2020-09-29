<template>
  <div class="goodsSwiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in goodsType" :key="index">
        <el-row class="food-row">
            <div class="food-col"  v-for="food in item" :key="food.title">
              <router-link :to="{path: '/food', query: {title: food.title, geoHash, restaurantCategoryId: getCategoryId(food.link)}}">
                <img :src="imgBaseUrl + food.image_url" alt="">
                <span>{{food.title}}</span>
              </router-link>
            </div>
        </el-row>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  // 引入插件
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";

  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: {
      goodsType: {
        type: Array,
        default(){
          return []
        }
      },
      geoHash: {
        type: String,
        default(){
          return ''
        }
      }
    },
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            loop: true
          },
          // 显示分页
          pagination: {
            el: ".swiper-pagination",
            clickable: true //允许分页点击跳转
          }
        },
        imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    methods: {
      slide(){
        console.log('redirect')
        this.swiper.slideTo(2, 1000, false);
      },
      // 解码url地址，求去restaurant_category_id值
      getCategoryId(url){
        let urlData = decodeURIComponent(url.split('=')[1].replace('&target_name',''));
        if (/restaurant_category_id/gi.test(urlData)) {
          return JSON.parse(urlData).restaurant_category_id.id
        }else{
          return ''
        }
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log("this is current swiper instance object", this.swiper);
      // console.log(this.goodsType)

    }
  };
</script>

<style scoped >
  .goodsSwiper .swiper-container{
    position: relative;
    width: 100%;
    padding-bottom: 20px;
    background: #fff;
  }
  .goodsSwiper .swiper-container .swiper-slide{
    width: 100%;

    color: #000;
    font-size: 16px;
    text-align: center;
    padding-bottom: 10px;
  }
  .food-row {
    display: flex;
    flex-wrap: wrap;
  }
  .food-col {
    box-sizing: border-box;
    width: 25%;
    padding: 5px;

  }
  .food-col a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .food-col img {
    max-width: 49px;
    max-height: 49px;
  }
  .food-col span{
    font-size: 12px;
  }

</style>