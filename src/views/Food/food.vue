<template>
  <el-container>
    <el-header height="49px">
      <navbar :go-back="true" :head-title="headTitle">

      </navbar>
    </el-header>
    <el-main>

    </el-main>
    <el-footer height="49px"></el-footer>
  </el-container>
</template>

<script>
  import Navbar from "@/components/common/NavBar/navbar";
  export default {
    name: "food",
    components: {Navbar},
    data(){
      return {
        headTitle: ''
      }
    },
    props: {

    },
    created(){
      this.headTitle = this.$route.query.title
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