<template>
  <div class="footnav-container">
    <ul class="footnav-ul">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "footnav"
  }
</script>

<style scoped>
  .footnav-container {
    background: #fff;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
  }
  .footnav-ul {
    list-style: none;

    display: flex;

  }
  .footnav-ul li {
    flex: 1 1;
    height: 49px;
  }

</style>