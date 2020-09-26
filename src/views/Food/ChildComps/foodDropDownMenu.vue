<template>
  <div class="food-dropdown-menu">
    <el-row class="dropdown-menu--container">
      <el-col class="menu-list--item" :span="8">
        <slot class="menu-list--text" name="type-left"></slot>
        <svg fill="currentColor" t="1601133486660" class="icon" viewBox="0 0 2048 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3128" ><path d="M863.172608 966.656c82.5344 75.776 218.7264 76.5952 302.08 1.4336L2007.185408 213.1968C2095.249408 134.3488 2032.375808 0 1907.857408 0H140.433408C16.119808 0-46.344192 133.12 39.876608 212.3776l823.296 754.4832z" p-id="3129"  fill-rule="evenodd"></path></svg>
      </el-col>
      <el-col class="menu-list--item" :span="8">
        <slot class="menu-list--text" name="type-center"></slot>
        <svg fill="currentColor" t="1601133486660" class="icon" viewBox="0 0 2048 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3128" width="49" height="49"><path d="M863.172608 966.656c82.5344 75.776 218.7264 76.5952 302.08 1.4336L2007.185408 213.1968C2095.249408 134.3488 2032.375808 0 1907.857408 0H140.433408C16.119808 0-46.344192 133.12 39.876608 212.3776l823.296 754.4832z" p-id="3129"  fill-rule="evenodd"></path></svg>
      </el-col>
      <el-col class="menu-list--item" :span="8">
        <slot class="menu-list--text" name="type-right"></slot>
        <svg fill="currentColor" t="1601133486660" class="icon" viewBox="0 0 2048 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3128" width="49" height="49"><path d="M863.172608 966.656c82.5344 75.776 218.7264 76.5952 302.08 1.4336L2007.185408 213.1968C2095.249408 134.3488 2032.375808 0 1907.857408 0H140.433408C16.119808 0-46.344192 133.12 39.876608 212.3776l823.296 754.4832z" p-id="3129"  fill-rule="evenodd"></path></svg>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
name: "foodDropdownMenu"
}
</script>

<style scoped>
  .dropdown-menu--container {
    padding: 0 8px;
  }
  .menu-list--item {
    font-size: 0.4rem;
    padding: 5px;
    text-align: center;
  }

  .menu-list--item {
   color: #3190e8;

  }
  .menu-list--item{
    border-left: 1px solid #e1e1e1;
  }

  .menu-list--item svg {
    width: 0.4rem;
    height: 0.4rem;
    margin-left: 4px;
  }
</style>