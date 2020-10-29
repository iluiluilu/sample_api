<template>
  <div id="base__page">
    <div class="base__content">
      <NotiGlobal />
      <div class="base__content-wp">
        <div class="base__content-bodywp">
          <div class="select__cat" :class="{'active':openSelect}">
            <div class="select__cat-head">
              <span :class="{'step-active': step === 1}">ぬ い ぐ る み ・ お も ち ゃ</span>
              <span class="icon__drop" :class="{'step-active': step === 1}" />
            </div>
            <div class="select__cat-body" />
          </div>
          <div class="base__content-body" :class="{'item-detail': showDetail}">
            <div class="po__items">
              <div class="po__items--wp">
                <div class="po__item">
                  <div class="po__item-thumb">
                    <img src="/pikachu-item.jpg" alt="" :class="{'step-active': step === 3}">
                  </div>
                  <div class="po__item-ball">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                  </div>
                </div>
                <div class="po__item">
                  <div class="po__item-thumb">
                    <img src="/pikachu-item.jpg" alt="">
                  </div>
                  <div class="po__item-ball" :class="{'step-active': step === 2}">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                  </div>
                </div>
                <div class="po__item">
                  <div class="po__item-thumb">
                    <img src="/pikachu-item.jpg" alt="">
                  </div>
                  <div class="po__item-ball">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                  </div>
                </div>
                <div class="po__item">
                  <div class="po__item-thumb">
                    <img src="/pikachu-item.jpg" alt="">
                  </div>
                  <div class="po__item-ball">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                  </div>
                </div>
                <div class="po__item">
                  <div class="po__item-thumb">
                    <img src="/pikachu-item.jpg" alt="">
                  </div>
                  <div class="po__item-ball">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                  </div>
                </div>
                <div class="po__item">
                  <div class="po__item-thumb">
                    <img src="/pikachu-item.jpg" alt="">
                  </div>
                  <div class="po__item-ball">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                  </div>
                </div>
                <div class="po__item">
                  <div class="po__item-thumb">
                    <img src="/pikachu-item.jpg" alt="">
                  </div>
                  <div class="po__item-ball">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- drag -->
        <div class="base__content-drag-wp">
          <div class="check__choose">
            選 び 方 を 確認 す る
          </div>
          <div class="base__content-drag">
            <div class="ball__container" :class="{'step-active': step === 3 || step === 4}">
              <div class="ball__sample">
                <img src="/pokemon-transparent.png" alt="">
              </div>
              <div class="ball__unchoose">
                <div class="ball__unchoose-item">
                  <img src="/pokeball-transparent.png" alt="">
                </div>
                <div class="ball__unchoose-item">
                  <img src="/pokeball-transparent.png" alt="">
                </div>
                <div class="ball__unchoose-item">
                  <img src="/pokeball-transparent.png" alt="">
                </div>
                <div class="ball__unchoose-item">
                  <img src="/pokeball-transparent.png" alt="">
                </div>
                <div class="ball__unchoose-item">
                  <img src="/pokeball-transparent.png" alt="">
                </div>
                <div class="ball__unchoose-item">
                  <img src="/pokeball-transparent.png" alt="">
                </div>
                <div class="ball__unchoose-item">
                  <img src="/pokeball-transparent.png" alt="">
                </div>
                <div class="ball__unchoose-item">
                  <img src="/pokeball-transparent.png" alt="">
                </div>
                <div class="ball__unchoose-item">
                  <img src="/pokeball-transparent.png" alt="">
                </div>
                <div class="ball__unchoose-item">
                  <img src="/pokeball-transparent.png" alt="">
                </div>
              </div>
            </div>
            <div class="drag__bg">
              <div class="drag__items">
                <div class="po__item">
                  <label class="container__checkbox">
                    <input type="checkbox">
                    <span class="checkmark" />
                  </label>
                  <div class="po__item-thumb">
                    <img src="/pikachu-item.jpg" alt="">
                  </div>
                  <div class="po__item-ball">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                  </div>
                </div>
                <div class="po__item">
                  <label class="container__checkbox">
                    <input type="checkbox">
                    <span class="checkmark" />
                  </label>
                  <div class="po__item-thumb">
                    <img src="/pikachu-item.jpg" alt="">
                  </div>
                  <div class="po__item-ball">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                  </div>
                </div>
                <div class="po__item">
                  <label class="container__checkbox">
                    <input type="checkbox">
                    <span class="checkmark" />
                  </label>
                  <div class="po__item-thumb">
                    <img src="/pikachu-item.jpg" alt="">
                  </div>
                  <div class="po__item-ball">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                  </div>
                </div>
                <div class="po__item">
                  <label class="container__checkbox">
                    <input type="checkbox">
                    <span class="checkmark" />
                  </label>
                  <div class="po__item-thumb">
                    <img src="/pikachu-item.jpg" alt="">
                  </div>
                  <div class="po__item-ball">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                  </div>
                </div>
                <div class="po__item">
                  <label class="container__checkbox">
                    <input type="checkbox">
                    <span class="checkmark" />
                  </label>
                  <div class="po__item-thumb">
                    <img src="/pikachu-item.jpg" alt="">
                  </div>
                  <div class="po__item-ball">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                  </div>
                </div>
                <div class="po__item">
                  <label class="container__checkbox">
                    <input type="checkbox">
                    <span class="checkmark" />
                  </label>
                  <div class="po__item-thumb">
                    <img src="/pikachu-item.jpg" alt="">
                  </div>
                  <div class="po__item-ball">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                    <img src="/pokemom-ball.png" alt="">
                  </div>
                </div>
              </div>
              <div class="group__btns--action">
                <button class="btn btn__choose">
                  全選択
                </button>
                <div class="wp">
                  <button class="btn btn__delete">
                    <span>選択解除</span>
                    <label class="container__checkbox">
                      <input type="checkbox">
                      <span class="checkmark" />
                    </label>
                  </button>
                </div>
              </div>
            </div>
            <div class="wp__bottom--btn">
              <button class="btn__finish--action">
                選択を終了する
              </button>
              <button class="btn__confirm">
                選び方を確認する
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BackgroundGeneral />
    <div class="tutorial">
      <!-- step 1 -->
      <div v-if="step === 1" class="step step-1">
        <img class="direct-path" src="/path-direct.png" alt="">
        <div class="tutorial-title">
          <img src="/around.png" alt="">
          <span class="title">商品カテゴリが<br>変更できるよ</span>
        </div>
        <img class="pngwing" src="/pngwing.png" alt="">
      </div>
      <!-- step 2 -->
      <div v-if="step === 2" class="step step-2">
        <div class="tutorial-title">
          <img src="/around.png" alt="">
          <span class="title">★を長押しタップで <br>商品詳細がわかるよ</span>
        </div>
        <img class="direct-path" src="/path-direct.png" alt="">
        <img class="pngwing" src="/satoshi.png" alt="">
      </div>
      <!-- step 3 -->
      <div v-if="step === 3" class="step step-3">
        <img class="direct-path direct-path-1" src="/path-direct.png" alt="">
        <div class="tutorial-title">
          <img src="/around.png" alt="">
          <span class="title">欲しい商品をつかんで<br>箱につめよう</span>
        </div>
        <img class="direct-path direct-path-2" src="/path-direct.png" alt="">
      </div>
      <!-- step 4 -->
      <div v-if="step === 4" class="step step-4">
        <img class="pngwing" src="/satoshi-ball.png" alt="">
        <div class="tutorial-title">
          <img src="/around.png" alt="">
          <span class="title">欲しい商品をつかんで<br>箱につめよう</span>
        </div>
        <img class="direct-path" src="/path-direct.png" alt="">
      </div>
      <!-- step 5 -->
      <div v-if="step === 5" class="step step-5">
        <img class="pngwing" src="/satoshi-ball.png" alt="">
        <div class="tutorial-title">
          <img src="/around.png" alt="">
          <span class="title">詰め終わったら<br>ここを押そう</span>
        </div>
        <img class="direct-path" src="/path-direct.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Help',
  components: {
  },
  data () {
    return {
      openSelect: false,
      showDetail: false
    }
  },
  computed: {
    ...mapGetters({
      step: 'help/step'
    })
  },
  mounted () {
    this.$store.dispatch('help/changeStatusHelp', true)
    const self = this
    document.addEventListener('click', function () {
      self.changeStep()
    })
  },
  methods: {
    changeStep () {
      this.$store.dispatch('help/changeStep', this.step + 1)
    },
    checkItemActive (index) {
      return (index === 0 && this.step === 2) || (index === 1 && this.step === 3)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/variables.scss';
  #base__page {
    .select__cat {
      height: 50px;
      border-radius: 10px;
      background: #00416D;
      width: 100%;
      margin-bottom: 2px;
      cursor: pointer;
      &-head {
      @media only screen and (max-width: 768px) {
        font-size: 18px;
        border-radius: 0;
      }
        height: 50px;
        border-radius: 10px;
        background: #00416D;
        width: 100%;
        font-size: 24px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon__drop {
          border: 15px solid;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-left: 15px solid transparent;
          transform: rotate(-90deg) translateX(-10px);
          margin-left: 20px;
          transition: 0.5s;
          @media only screen and (max-width: 768px) {
          border: 10px solid;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 10px solid transparent;
          transform: rotate(-90deg) translateX(-7px);
        }
        }
      }
      &-body {
          margin-top: 2px;
          padding-top: 25px;
          background-image: url(/grid-opacity.svg);
          transition: 0.5s;
          pointer-events: none;
          height: 0;
          background-color: #00416D;
          position: relative;
          opacity: 0;
          .select__item {
            background: #8EF8F4;
            height: 70px;
            font-size: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 7px;
          }
      }
      &.active {
        .select__cat-body {
          @media only screen and (max-width: 768px) {
          height: calc(100vh - 100px);
          border-radius: 0;
        }
          border-radius: 10px;
          opacity: 1;
          height: calc(100vh - 126px);
          pointer-events: inherit;
          position: relative;
          z-index: 1;
        }
        .select__cat-head {
          .icon__drop {
            transform: rotate(90deg) translateX(-10px);
          }
        }
      }
    }
    .base__content {
      z-index: unset;
    }
    .base__content-wp {
      display:flex;
      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
    .base__content-bodywp {
      width: 66%;
      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }
    .base__content-body {
      position: relative;
      &.item-detail {
        background-color: #ffe8d4a3;
        .po__items {
          opacity: 0;
        }
      }
      background: #FFE8D4;
      border-radius: 10px;
      padding-bottom:20px;
      .po__items {
      height: calc(100vh - 126px);
      overflow-y: auto;
      overflow-x:hidden;
      @media only screen and (max-width: 768px) {
      height: calc(100vh - 300px);
      }
      &--wp {
        display: flex;
        flex-wrap: wrap;
        padding: 10px 5px;
        @media only screen and (max-width: 1200px) {
          display: grid;
          grid-template-columns: 49% 49%;
          grid-gap: 10px;
          justify-items: center;
        }
        @media screen and (max-width: 768px) and (min-width: 575px) {
          grid-template-columns: 32% 32% 32%;
        }
      }
        .po__item {
          margin: 10px;
          width: 30%;
          max-width: 210px;
          max-height: 290px;
          @media only screen and (max-width: 1535px) {
            width: 29%;
          }
          @media only screen and (max-width: 1200px) {
          width: 100%;
          }
          &-thumb {
            max-width: 210px;
            max-height: calc(100% - 59px);
            img {
              border-radius: 10px 10px 0 0;
              width: 100%;
            }
          }
          &-ball {
            max-height: 25%;
            border-radius: 0 0 10px 10px;
            background: #00416D;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 210px;
            padding: 17px 0;
            img:not(:last-child) {
              margin-right: 7px;
            }
          }
        }
      }
    }//end base body
    .base__content-drag-wp {
      width: 35%;
      @media only screen and (max-width: 768px) {
      width: 100%;
    }
      .check__choose {
        @media only screen and (max-width: 768px) {
        display: none;
      }
        border-radius: 10px;
        height: 50px;
        background: #F58722;
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ball__container {
        background: url(/feature-head.png) no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100px;
        background-size: 100% 99%;
        @media only screen and (max-width: 768px) {
          margin: 0 10px;
        }
        .ball__sample {
          max-width: 115px;
          max-height: 81px;
          margin-right: 25px;
        }
        .ball__unchoose {
          display: flex;
          width: calc(100% - 200px);
          flex-wrap: wrap;
          height: 66px;
          overflow: hidden;
          //tạm thời để như này
          &-item {
            width: 25px;
            height: 25px;
            margin: 4px;
          }
        }
      }
      .drag__bg {
        height: calc(100vh - 300px);
        border-radius: 10px;
        background: #B1DFFF;
        @media only screen and (max-width: 768px) {
          display: none;
        }
        .drag__items {
          @media only screen and (max-width: 1024px) {
          grid-template-columns: 100%;
        }
          display:grid;
          grid-template-columns: 50% 50%;
          overflow-y: scroll;
          height: calc(100vh - 450px);
          margin-bottom: 20px;
          &::-webkit-scrollbar {display: none;}
        }
        .po__item {
          margin: 10px;
          max-width: 210px;
          position: relative;
          @media only screen and (max-width: 1024px) {
          max-width: 100%;
        }
          &-thumb {
            max-width: 168px;
            height: calc(100% - 59px);
            @media only screen and (max-width: 1024px) {
            max-width: inherit;
          }
            img {
              border-radius: 10px 10px 0 0;
              width: 100%;
            }
          }
          &-ball {
            max-height: 25%;
            border-radius: 0 0 10px 10px;
            background: #00416D;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 210px;
            padding: 17px 0;
            img:not(:last-child) {
              margin-right: 7px;
            }
          }
        }
        .group__btns--action {
          display: flex;
          flex-direction: column;
          align-items: center;
          @media only screen and (max-width: 768px) {
            display: none;
          }
          .btn {
            height: 50px;
            border-radius: 10px;
          }
          .btn__choose {
            background: #FFDDBE;
            border: 2px solid #F58722;
            font-size: 22px;
            color: #F58722;
            margin-bottom: 7px;
            width: calc(100% - 20px);
          }
          .wp{
            position: relative;
            width: calc(100% - 20px);
            display: flex;
          }
          .btn__delete{
            border: 2px solid #00416D;
            color: #00416D;
            background: #fff;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row-reverse;
            .container__checkbox {
              position: relative;
              top: inherit;
              right: inherit;
              margin-bottom: 0;
              margin-right: 20px;
            }
          }
        }
      }
      .wp__bottom--btn {
        position: relative;
            @media only screen and (max-width: 768px) {
            display: flex;
            padding: 0 15px;
            flex-direction: row-reverse;
          }
        .btn__finish--action,.btn__confirm {
            @media only screen and (max-width: 768px) {
            position: inherit;
            width: 50%;
            height: 73px;
            line-height: 73px;
            display: flex;
            justify-content: center;
            border-radius: 10px;
          }
            font-size: 22px;
            border-radius: 10px;
            height: 76px;
            width: 100%;
            outline: none;
            position: absolute;
        }
      }
      .btn__finish--action {
        color: #fff;
        background:#00416D ;
        border-color: #00416D;
      }
      .btn__confirm {
        color: #F58722;
        background: #FFDDBE;
        display: none;
        @media only screen and (max-width: 768px) {
          display: inherit;
          margin-right: 10px;
          border: 2px solid #F58722;
        }
      }
    }
    .step-active {
      z-index: 10;
      position: relative;
    }
  }
  #base__page {
    .tutorial {
      z-index: 9;
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      top: 0;
      left: 0;
      background-color: #14222be0;
      .step {
        position: relative;
        width: 100%;
        height: 100%;
        .direct-path {
          position: absolute;
          max-width: 100px;
        }
        .tutorial-title {
          position: relative;
          img {
            max-width: 100%;
          }
          .title {
            color: #fff;
            font-size: 20px;
            position: absolute;
          }
        }
        .pngwing {
          position: absolute;
        }
        &.step-1 {
          top: calc(#{$HEADER_HEIGHT} + 26px);
          .direct-path {
            transform: rotate(156deg);
            left: 30%;
          }
          .tutorial-title {
            top: 11%;
            left: 23%;
            img {
              max-width: 35%;
            }
            .title {
              left: 9%;
              top: 27%;
            }
          }
          .pngwing {
            top: 0;
            right: 28%;
            max-width: 15%;
          }
        }
        &.step-2 {
          .direct-path {
            top: 46%;
            left: 29%;
            transform: rotate(163deg);
          }
          .tutorial-title {
            top: 54%;
            left: 23%;
            .title {
              font-size: 20px;
              position: absolute;
              left: 132px;
              top: 36px;
            }
          }
          .pngwing {
            top: 30%;
            right: 28%;
            max-width: 15%;
          }
        }
        &.step-3 {
          .direct-path-1 {
            transform: rotate(66deg);
            top: 42%;
            left: 28%;
            max-width: 100px;
          }
          .direct-path-2 {
            transform: rotate(155deg);
            max-width: 100px;
            top: 33%;
            left: 56%;
          }
          .tutorial-title {
            top: 47%;
            left: 37%;
            .title {
              left: 7%;
              top: 38%;
            }
          }
        }
        &.step-4 {
          .direct-path {
            transform: rotate(157deg);
            width: 100px;
            top: 27%;
            left: 54%;
          }
          .tutorial-title {
            top: 40%;
            left: 46%;
            .title {
              top: 33%;
              left: 7%;
              width: 290px;
            }
          }
          .pngwing {
            top: 23%;
            left: 28%;
            max-width: 15%;
          }
        }
        &.step-5 {
          .direct-path {
            transform: rotate(-86deg);
            width: 100px;
            top: 234%;
            left: 67%;
          }
          .tutorial-title {
            transform: rotate(-20deg);
            top: 660px;
            left: 6%;
            .title {
              left: 19%;
              top: 40%;
            }
          }
          .pngwing {
            top: 21%;
            left: 10%;
          }
        }
      }
    }

    @media only screen and (max-width: 768px) {
      .tutorial {
        width: 100%!important;
        .step {
          &.step-1 {
            top: calc(#{$HEADER_HEIGHT} + 10px);
            .pngwing {
              max-width: 30%;
            }
          }
          &.step-2 {
            .tutorial-title {
              top: 21%;
              left: 23%;
              img {
                max-width: 300px;
              }
              .title {
                font-size: 15px;
                left: 13%;
                top: 22%;
              }
            }
            .direct-path {
              top: 30%;
              left: 48%;
              transform: rotate(-87deg);
              max-width: 79px;
            }
            .pngwing {
              max-width: 42%;
              left: 0%;
              right: unset;
            }
          }
          &.step-4 {
            .pngwing {
              max-width: 30%;
              left: 17%;
              top: 8%;
            }
            .tutorial-title {
              img {
                max-width: 347px;
              }
              top: 54%;
              left: 20%;
              .title {
                font-size: 18px;
                left: 10%;
              }
            }
            .direct-path {
              transform: rotate(-71deg);
              width: 100px;
              top: 66%;
              left: 51%;
            }
          }
          .direct-path {
            width: 129px;
          }
          .tutorial-title {
            .title {
              font-size: 30px;
            }
          }
        }
      }
    }
    // @media only screen and (max-width: 576px) {
    //   .step {
    //     &.step-5 {
    //       .tutorial-title {
    //         top: 582px!important;
    //       }
    //       .pngwing {
    //         transform: scale(0.75);
    //       }
    //     }
    //   }
    // }
    // @media only screen and (max-width: 500px) {
    //   .step {
    //     &.step-3 {
    //       .direct-path-1 {
    //         left: 17%!important;
    //       }
    //       .tutorial-title {
    //         top: 289px!important;
    //         left: 0px!important;
    //       }
    //     }
    //     &.step-5 {
    //       .tutorial-title {
    //         top: 473px !important
    //       }
    //       .direct-path {
    //         top: 253%!important;
    //       }
    //     }
    //   }
    // }
    // @media only screen and (max-width: 410px) {
    //   .step {
    //     .tutorial-title {
    //       .title {
    //         font-size: 22px!important;
    //       }
    //     }
    //   }
    // }
  }
  @media only screen and (max-width: 750px) {
    .item-container {
      width: 50%!important;
      margin-right: 0!important;
      padding-right: 40px;
      height: 100%;
    }
  }
</style>
