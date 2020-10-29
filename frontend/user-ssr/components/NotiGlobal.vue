<template>
  <div class="noti__global">
    商品を選んで箱に詰めよう！
    <div class="wp__close--cart" @click="$emit('close-cart')">
      <b-button class="btn__close">
        <b-icon icon="x" scale="2" />
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotiGlobal'
}
</script>

<style lang="scss">
.noti__global {
    @media only screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 50px;
    height: 50px;
    border-radius: 0;
  }
    background-image: url(/grid-opacity.svg);
    text-align: center;
    font-size: 30px;
    color: #FF5454;
    border-radius: 10px;
    background-color: #FFE4E4;
    height: 74px;
    line-height: 74px;
    font-weight: bold;
    position: relative;
    z-index: 1;
    margin-bottom: 4px;
    .wp__close--cart {
      display: none;
      position: absolute;
      top: 0;
      right: 25px;
      width: 25px;
      height: 25px;
      .btn__close {
        background: #00416D;
        padding: 6px 8px;
      }
    }
    &.btn__x {
      .wp__close--cart {
        display: inherit;
      }
    }
}
</style>
