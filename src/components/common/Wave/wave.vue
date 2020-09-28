<template>
  <div @click="waveAnimation($event)">
    <div class="wave wave5"></div>
    <div class="wave wave4"></div>
    <div class="wave wave3"></div>
    <div class="wave wave2"></div>
    <div class="wave wave1"></div>
    <div class="wave wave0"></div>
  </div>
</template>

<script>
export default {
  name: "wave",
  data(){
    return {
      mx: '',
      my: '',
      z: 2
    }
  },
  methods: {
    waveAnimation(e){

      console.log(e);
      this._wave(e.offsetX,e.offsetY,this.z++)
    },
    _wave(i,j,k){
      this.$parent.$el.classList.add("wave"+k)
    }
  }
}
</script>

<style scoped>
.wave{
  position:absolute;
  top:calc((100% - 30px)/2);
  left:calc((100% - 30px)/2);
  width:30px;
  height:30px;
  border-radius:300px;
  background-image:url('https://i0.hdslb.com/bfs/archive/0b65aafecdf87bdce4b420d61e9286a00a4aaaf8.jpg@880w_388h_1c_95q');
  background-attachment:fixed;
  background-position:center center;
}
.wave0{
  z-index:2;
  background-size:auto 106%;
  animation:w 1s forwards;
}
.wave1{
  z-index:3;
  background-size:auto 102%;
  animation:w 1s .2s forwards;
}
.wave2{
  z-index:4;
  background-size:auto 104%;
  animation:w 1s .4s forwards;
}
.wave3{
  z-index:5;
  background-size:auto 101%;
  animation:w 1s .5s forwards;
}
.wave4{
  z-index:6;
  background-size:auto 102%;
  animation:w 1s .8s forwards;
}
.wave5{
  z-index:7;
  background-size:auto 100%;
  animation:w 1s 1s forwards;
}
@keyframes w{
  0%{
    top:calc((100% - 30px)/2);
    left:calc((100% - 30px)/2);
    width:30px;
    height:30px;
  }
  100%{
    top:calc((100% - 300px)/2);
    left:calc((100% - 300px)/2);
    width:300px;
    height:300px;
  }
}

</style>