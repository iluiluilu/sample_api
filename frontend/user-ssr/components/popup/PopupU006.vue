<template>
  <div id="u006">
    <div class="popup__wp">
      <div class="base__content-popup">
        <div class="label__feature">
          <div class="label__feature-content">
            <img class="label__feature-ball" src="/pokemon-transparent.png" alt="">
            <div class="label__feature-text">
              こ の 的 に つ ま っ て い る よ！
            </div>
          </div>
        </div>
        <div class="po__items">
          <div class="po__items-wp">
            <div v-for="(item, index) in cartItemsSelected" :key="index" class="po__item">
              <img :src="item.image_path" alt="">
            </div>
          </div>
        </div>
        <div class="po__desc">
          以上 の 的 め ら れ て い ま す。<br> 詰 め 放 題 を 終了 し て も よ し い で で
        </div>
        <div class="group__btns">
          <button class="btn__item" @click="show">
            はい、終了します
          </button>
          <button class="btn__item" @click="$emit('closePopupU006')">
            商品を選びなおす
          </button>
        </div>
      </div>
      <div class="background__popup" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PopupU006',
  conponents: {
  },
  computed: {
    ...mapGetters({
      cartItemsSelected: 'item/cartItemsSelected'
    })
  },
  methods: {
    show () {
      this.$emit('show-popup-status')
    }
  }
}
</script>

<style lang="scss">
#u006 {
  position: absolute;
  top: 74px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    top: 0;
    height: 100vh;
  }
  .popup__wp {
    width: 100%;
  }
  .base__content-popup {
    margin-left: auto;
    margin-right: auto;
    padding-top: 35px;
    background: #B1DFFF;
    border-radius: 10px;
    position: relative;
    z-index: 2;
    height: calc(100vh - 74px);
    overflow-y: scroll;
    @media only screen and (max-width: 768px) {
      position: absolute;
      border-radius: 0;
      height: 277px;
      top: 50%;
      transform: translateY(-50%);
      padding-top: 0;
      width: 100vw;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .label__feature {
      @media only screen and (max-width: 768px) {
        display: none;
      }
      max-width: 586px;
      height: 133px;
      position: relative;
      background: url(/feature-head.png) no-repeat;
      background-size: 100% 99%;
      margin-left: auto;
      margin-right: auto;
      &-bg {
        width: 100%;
        position: absolute;
        object-fit: inherit;
      }
      &-content {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &-ball {
        width: 115px;
        height: 81px;
      }
      &-text {
        color: #fff;
        font-size: 25px;
      }
    }
    .po__items {
      border-radius: 10px;
      border: 2px solid #e6974f;
      margin-left: auto;
      margin-right: auto;
      background: #FFDDBE;
      margin: 35px auto;
      width: calc(100% - 70px);
      margin-top: 35px;
      margin-bottom: 35px;
      padding: 33px 19px;
      @media only screen and (max-width: 768px) {
      border-radius: 10px;
      border: 2px solid #e6974f;
      height: 105px;
      background: #FFDDBE;
      overflow-y: hidden;
      margin-top: 8px;
      margin-bottom: 10px;
      width: calc(100% - 25px);
      padding: 8px 7px;
      }
    }
    .po__items-wp {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      justify-items: center;
      gap: 18px;
      overflow-y: auto;
      max-height: 420px;
      &::-webkit-scrollbar {
        display: none;
      }
      @media only screen and (max-width: 768px) {
      overflow-y: scroll;
      margin-top: 0px;
      padding: 0px 8px;
      margin-bottom: 0px;
      width: 100%;
      height: 100%;
    }
    }
    .po__item {
      width: 100%;
      max-width: 168px;
      max-height: 168px;
      border-radius: 5px;
      border: 1px solid #00416D;

      img {
        border-radius: 5px;
        width: 100%;
        max-height: 168px;
      }
    @media only screen and (max-width: 768px) {
      width: 52px;
      height: 52px;
      img {
        max-height: 50px;
      }
    }
    }
    .po__desc {
      text-align: center;
      font-size: 27px;
      color: #00416D;
      font-weight: 600;
      @media only screen and (max-width: 768px) {
      font-size: 18px;
    }
    }
    .group__btns {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      @media only screen and (max-width: 1280px) {
        margin-top: 15px;
      }
      .btn__item {
        font-size: 24px;
        border: 2px solid #00416D;
        border-radius: 8px;
        padding: 16px 30px;
        color: #00416D;
        transition: 0.4;
        background: #DEF2FF ;
        width: 37%;
        white-space: nowrap;
        @media only screen and (max-width: 1280px) {
        font-size: 17px;
        padding: 22px 2px;
        width: 47%;
        }
        &:hover {
          background: #00416D;
          color: #fff;
        }
        &:first-child {
          margin-right: 50px;
        @media only screen and (max-width: 1280px) {
         margin-right: 9px;
        }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .background__popup {
      position: fixed;
      background: #051621;
      opacity: 0.9;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      width: 100vw;
    }
  }
}
</style>
