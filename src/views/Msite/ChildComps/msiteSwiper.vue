<template>
  <div class="m-swiper--container">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  /* 导入vue-anwesome-swiper element carousel不支持移动端触屏 */
  // import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  // import 'swiper/css/swiper.css'

  export default {
    name: "msiteSwiper",
    components: {

    },
    data(){
      return {

        }
      }

  }
</script>

<style scoped>

</style>