<template>
  <el-row>
    <el-col :span="24">
      <div class="home-nav--cardTitle">
        <slot name="title"></slot>
      </div>
    </el-col>
    <el-col :span="6" v-for="city of cities" :key="city.id">
      <router-link :to="{path: 'city/' + city.id }">
        <div class="home-nav--cityCard ellipsis" :class="{'isHotCity':isHotCity}">
          {{city.name}}
        </div>
      </router-link>

    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "citycard",
    props: {
      cities: {
        type: Array,
        default(){
          return []
        }
      },
      isHotCity: {
        type: Boolean,
        default() {
          return false
        }
      }
    }
  }
</script>

<style scoped>

  .home-nav--cardTitle {
    padding: 10px 8px;
    background: #fff;
    color: #666;
    border-bottom: 1px solid #e4e4e4;
    font-size: 13px;
  }

  .home-nav--cityCard {
    padding: 10px 8px;
    color: #666;
    text-align: center;
    border-bottom: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
    background: #fff;
    font-size: 13px;
  }

  .isHotCity {
    color: #3190e8;
  }


</style>