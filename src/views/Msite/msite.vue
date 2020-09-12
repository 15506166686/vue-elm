<template>
  <el-container>
    <el-header height="49px">
      <h2>Msite</h2>
    </el-header>
    <el-main>Main</el-main>
    <el-footer height="49px">
      <main-foot-nav></main-foot-nav>
    </el-footer>
  </el-container>
</template>

<script>

  import MainFootNav from "@/components/content/FootNav/mainFootNav";
  export default {
    name: "msite",
    components: {MainFootNav}
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
</style>