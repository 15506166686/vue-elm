<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        /*
        * 1 滚动的时候会派发scroll事件，会截流。
        * 2 滚动的时候实时派发scroll事件，不会截流。
        * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
        * */
        type: Number,
        default: 0
      },
      pullUpload: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll: null
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpload,
        scrollX: false
      })

      this.scroll.on("scroll",(position) => {
        // console.log('scroll')
        this.$emit("scroll",position)
      })
      /* 监听上拉事件*/
      this.scroll.on("pullingUp",() => {
        console.log("pullingUp")
        this.$emit("pullingUp")

      })
    },
    methods: {
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refresh(){
        console.log('我更新了')
        this.scroll && this.scroll.refresh();
      },
      destroy(){
        this.scroll.destroy()
      }
    }
  }
</script>

<style scoped>
</style>