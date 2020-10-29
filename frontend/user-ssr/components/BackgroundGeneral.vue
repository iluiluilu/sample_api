<template>
  <div class="bg__container">
    <div class="grass__green-bg">
      <img src="/bg-green.png" alt="">
    </div>
    <div class="lighting__bg">
      <div class="lighting__bg-item lg">
        <img src="/lightingx2.png" alt="">
      </div>
      <div class="lighting__bg-item sm">
        <img src="/lighting.png" alt="">
      </div>
    </div>
    <div class="satoshi__bg">
      <img src="/satoshi-base.png" alt="">
    </div>
    <div class="pikachu__bg">
      <img src="/Pokemon-Pikachu-PNG.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundGeneral'
}
</script>

<style lang="scss">
.bg__container {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 0;
 @media only screen and (max-width: 768px) {
   display: none;
 }
  .grass__green-bg {
    width: 100vw;
    position: absolute;
    bottom: 0;
    max-height: 335px;
  }
  .lighting__bg {
    width: 420px;
    height: 100vh;
    position: absolute;
    right: 0;
    bottom: 0;
    &-item {
      position: absolute;
    }
    &-item.sm {
      right: -44px;
      width: 250px;
      bottom: 140px;
      height: 427px;
      transform: rotate(13deg);
      z-index: 1;
      img{height: 100%;}
    }
  }
  .satoshi__bg,.pikachu__bg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 18%;
  }
  .satoshi__bg {
    // width: 329px;
    left: 1%;
  }
  .pikachu__bg {
    // width: 404px;
    right: 0;
  }
}
</style>
