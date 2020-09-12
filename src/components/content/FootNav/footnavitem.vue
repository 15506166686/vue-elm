<template>
  <li>
    <router-link class="footnav-li--item" :class="{active: activeIndex}"  :to="{path}">
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
  export default {
    name: "footnavitem",
    props: {
      path: {
        type: String
      }
    },
    computed: {
      activeIndex(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    }
  }
</script>

<style scoped>
  .footnav-li--item {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .active {
    color: #3190e8;

  }


</style>