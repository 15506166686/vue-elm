<template>
  <div>
    <slot name="nav-left"></slot>
    <slot name="nav-center"></slot>
    <slot name="nav-right"></slot>
  </div>
</template>

<script>
  export default {
    name: "navbar-item"
  }
</script>

<style scoped>

</style>