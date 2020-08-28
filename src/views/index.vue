<template>
  <div>
    <h2>Hello world</h2>
  </div>
</template>

<script>

  import {request} from "@/network/request";

  export default {
    name: "index",
    created(){
      request({
        url: 'v1/cities',
        params: {
          type: 'guess'
        }
      }).then(data => {
        console.log(data)
      })
    }
  }
</script>

<style scoped>

</style>