<template>
  <el-container>
    <el-header height="49px">
      <navbar :go-back="true" :head-title="headTitle"></navbar>
    </el-header>
    <el-main>
      <food-dropdown-menu @changeTitle="foodOptions[0].name = '分类'" @recoverTitle="foodOptions[0].name = headTitle" :food-types="foodOptions"></food-dropdown-menu>

    </el-main>
    <el-footer height="49px"></el-footer>

  </el-container>
</template>

<script>
  import Navbar from "@/components/common/NavBar/navbar";
  import FoodDropdownMenu from "@/views/Food/ChildComps/foodDropDownMenu";
  import {mapState, mapMutations} from 'vuex'
  import {msiteAddress, foodCategory, foodDelivery, foodActivity} from "@/network/getData";

  export default {
    name: "food",
    components: {FoodDropdownMenu, Navbar},
    data(){
      return {
        headTitle: '',
        foodOptions: [
          {
            name: '分类',
            _id: 'foodCategory_01'
          },
          {
            name: '排序',
            _id: 'foodCategory_02'
          },
          {
            name: '筛选',
            _id: 'foodCategory_03'
          }
        ],
        foodTitle: '',
        restaurantCategoryId: '',
        category: [],
        categoryDetail: [],
        Delivery: '',
        Activity: []
      }
    },
    props: {

    },
    created(){
      this.initData()
    },
    computed: {
      ...mapState(['latitude','longitude'])
    },
    methods: {
      ...mapMutations(['RECORD_ADDRESS']),
      // 初始化数据
      initData(){
        this.geoHash = this.$route.query.geoHash
        this.headTitle = this.$route.query.title
        this.foodOptions[0].name = this.$route.query.title
        this.restaurantCategoryId = this.$route.query.restaurantCategoryId
        //防止刷新页面时，vuex状态丢失，经度纬度需要重新获取，并存入vuex
        if (!this.latitude) {
          //获取位置信息
          msiteAddress(this.geohash).then(res => {
            // 记录当前经度纬度进入vuex
            this.RECORD_ADDRESS(res);
          })
        }
        //获取category分类左侧数据
       foodCategory(this.latitude, this.longitude).then(data => {
         this.category = data
       })
        //初始化时定位当前category分类左侧默认选择项，在右侧展示出其sub_categories列表
        this.category.forEach(item => {
          if (this.restaurantCategoryId == item.id) {
            this.categoryDetail = item.sub_categories;
          }
        });
        //获取筛选列表的配送方式
        foodDelivery(this.latitude, this.longitude).then(data => {
          this.Delivery = data
        })
        //获取筛选列表的商铺活动
        foodActivity(this.latitude, this.longitude).then(data => {
          this.Activity = data
        })
        //记录support_ids的状态，默认不选中，点击状态取反，status为true时为选中状态
        this.Activity.forEach((item, index) => {
          // this.support_ids[index] = { status: false, id: item.id };
        });
      },
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
}
</style>