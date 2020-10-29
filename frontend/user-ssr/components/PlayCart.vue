<template>
  <div
    id="play-cart"
    class="base__content-drag-wp"
    @dragenter="dragEnter"
    @dragleave="dragLeave"
    @drop="onDrop"
    @dragover="allowDrop"
  >
    <div class="check__choose" @click="$emit('start-help-mode')">
      選び方を確認する
    </div>
    <div class="base__content-drag">
      <div class="ball__container" :class="{'step-active': helpMode}">
        <div class="ball__sample">
          <img src="/pokemon-transparent.png" alt="">
        </div>
        <div v-if="helpMode" class="ball__unchoose">
          <div
            v-for="(rank, index) in 3"
            :key="index"
            class="ball__unchoose-item"
          >
            <img src="/pokemom-ball.png" alt="">
          </div>
          <div
            v-for="(rank, index) in 7"
            :key="index + 3"
            class="ball__unchoose-item"
          >
            <img src="/pokeball-transparent.png" alt="">
          </div>
        </div>
        <div v-else class="ball__unchoose">
          <div
            v-for="(rank, index) in totalRankSelected"
            :key="index"
            class="ball__unchoose-item"
          >
            <img src="/pokemom-ball.png" alt="">
          </div>
          <div
            v-for="(rank, index) in (ticket.max_rank - totalRankSelected)"
            :key="index + totalRankSelected"
            class="ball__unchoose-item"
          >
            <img src="/pokeball-transparent.png" alt="">
          </div>
        </div>
        <div v-if="helpMode" class="arround" />
      </div>
      <div class="drag__bg">
        <div id="drag__items" :key="itemCartKey" class="drag__items">
          <div
            v-for="(item, index) in cartItemsSelected"
            :key="index"
            class="po__item"
          >
            <label class="container__checkbox">
              <input
                :id="'checkbox-' + index"
                type="checkbox"
                @click="checkedCartItem(index)"
              >
              <span class="checkmark" />
            </label>
            <div class="po__item-thumb">
              <img :src="item.image_path" alt="">
            </div>
            <div class="po__item-ball">
              <img v-for="(ball, i) in item.rank" :key="i" src="/pokemom-ball.png" alt="">
            </div>
          </div>
        </div>
        <div class="group__btns--action main__visual-pc">
          <button class="btn btn__choose" @click="removeAll">
            全選択
          </button>
          <div class="wp">
            <button class="btn btn__delete" @click="removeChecked">
              <span>選択解除</span>
              <label class="container__checkbox">
                <input id="checkbox-all" type="checkbox" checked disabled="disabled">
                <span class="checkmark" />
              </label>
            </button>
          </div>
        </div>
      </div>
      <div class="group__btns--action main__visual-sp">
        <button class="btn btn__choose" @click="removeAll">
          全選択
        </button>
        <div class="wp">
          <button class="btn btn__delete" @click="removeChecked">
            <span>選択解除</span>
            <label class="container__checkbox">
              <input id="checkbox-all" type="checkbox" checked disabled="disabled">
              <span class="checkmark" />
            </label>
          </button>
        </div>
      </div>
      <div class="wp__bottom--btn">
        <button class="btn__finish--action" @click="$emit('open-cart')">
          選択を終了する
        </button>
        <button class="btn__confirm" @click="$emit('open-help')">
          選び方を確認する
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PlayCart',
  props: {
    helpMode: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      itemCartKey: 0
    }
  },
  computed: {
    ...mapGetters({
      cartItemsSelected: 'item/cartItemsSelected',
      cartItemIdSelected: 'item/cartItemIdSelected',
      ticket: 'item/ticket',
      totalRankSelected: 'item/totalRankSelected'
    })
  },
  methods: {
    onDrop (event) {
      const idSelect = event.dataTransfer.getData('id')
      this.$store.dispatch('item/selectItem', idSelect)
      this.$nextTick(function () {
        const objDiv = document.getElementById('drag__items')
        objDiv.scrollTop = objDiv.scrollHeight
      })
      const element = document.getElementById('play-cart')
      if (element) {
        element.classList.remove('drag-in')
      }
    },
    checkedCartItem (index) {
      const checkbox = document.getElementById('checkbox-' + index)
      if (checkbox.checked === true) {
        this.$store.dispatch('item/checkedCartItem', index)
      } else {
        this.$store.dispatch('item/unCheckedCartItem', index)
      }
    },
    allowDrop (event) {
      event.preventDefault()
      const element = document.getElementById('play-cart')
      if (element) {
        element.classList.add('drag-in')
      }
    },
    dragEnter () {
    },
    dragLeave () {
      const element = document.getElementById('play-cart')
      if (element) {
        element.classList.remove('drag-in')
      }
    },
    removeAll () {
      this.$store.dispatch('item/removeAllItem')
    },
    removeChecked () {
      if (this.cartItemIdSelected.length > 0) {
        this.$store.dispatch('item/removeCheckedCartItem')
        this.itemCartKey++
      }
    }
  }
}
</script>

<style scoped lang="scss">
  #play-cart {
    @media only screen and (max-width: 768px){
      margin-left: 0;
    }
    @media only screen and (max-width: 900px) and (orientation: landscape) {
      height: calc(100vh - 76px);
      .check__choose {
        font-size: 17px;
      }
      .ball__container {
        background-size: cover;
      }
      .ball__sample {
        display:none;
      }
      .ball__unchoose {
        width: 100%;
        justify-content: center;
      }
      .btn__finish--action {
        font-size: 17px;
        height: 50px;
      }
    }
    overflow-y: auto;
    margin-left: 5px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .base__content-drag-wp {
    &.open__cart {
      .base__content-drag {
        display: grid;
        .ball__container {
          grid-row: 2;
          margin: 13px 22px 7px 7px;
          width: calc(100vw - 15px);
        }
      }
      .drag__bg {
        display: inherit;
        background: #FFE8D4;
        margin-top: 10px;
        height: calc(100vh - 350px);
        min-height: 270px;
        @media only screen and (max-width: 768px){
          border-radius: 0;
        }
      }
      #drag__items {
        grid-template-columns: 48% 48%!important;
        justify-items: center;
        height: auto;
        .po__item {
          max-height: 100%;
        }
      }
      & .group__btns--action {
        display: flex!important;
        flex-direction: row!important;
        width: calc(100vw - 30px);
        margin-left: 15px;
        margin-right: 15px;
        margin-bottom: 12px;
        .btn__choose {
          margin-bottom: 0!important;
          margin-right: 6px;
        }
      }
      .wp__bottom--btn {
        padding: 0px 10px;
        flex-direction: row;
        .btn__confirm {
          display: none;
        }
        .btn__finish--action {
          width: calc(100vw - 20px);
        }
      }
    }
    width: 35%;
    &.drag-in {
      .ball__container, #drag__items {
        opacity: 0.7;
      }
    }
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
      cursor: pointer;
    }
    .ball__container {
      background: url(/feature-head.png) no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100px;
      background-size: 100% 99%;
      &.step-active {
        position: relative;
        .arround {
          background: #00416D;
          z-index: 10;
          width: 110%;
          position: absolute;
          height: 113%;
          border: 2px solid #E3BC1E;
          border-radius: 10px;
          top: -5%;
          left: -5%;
        }
        .ball__sample, .ball__unchoose {
          z-index: 11;
        }
      }
      @media only screen and (max-width: 768px) {
        margin: 0 10px;
      }
      .ball__sample {
        max-width: 115px;
        max-height: 81px;
      }
      .ball__unchoose {
        display: flex;
        width: 50%;
        flex-wrap: wrap;
        min-height: 66px;
        padding: 10px 0px;
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
        max-height: 250px;
        @media only screen and (max-width: 1024px) {
          max-width: 100%;
        }
        &-thumb {
          max-width: 168px;
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
            margin-right: 0.2em;
          }
          img {
            max-width: 18%;
          }
        }
      }
    }
    .group__btns--action {
      display: flex;
      flex-direction: column;
      align-items: center;
      &.main__visual-sp {
        display: none;
      }
      @media only screen and (max-width: 768px) {
        &.main__visual-pc {
          display: none!important;
        }
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
          height: 55px;
          line-height: 55px;
          display: flex;
          justify-content: center;
          border-radius: 10px;
          font-size: 15px;
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
      font-weight: 600;
      border: none;
      outline: none;
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
    // .main__visual-sp {display: none;}
    //   @media only screen and (max-width: 768px){
    //     .main__visual-pc {
    //       display: none;
    //     }
    //     .main__visual-sp {
    //       display: inherit;
    //     }
    //   }
  }
</style>
