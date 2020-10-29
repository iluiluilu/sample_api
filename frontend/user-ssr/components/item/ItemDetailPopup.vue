<template>
  <div id="item__detail">
    <b-button class="btn__close" @click="closeDetail">
      <b-icon icon="x" scale="2" />
    </b-button>
    <div class="item__detail-thumb">
      <img :src="item.image_path" alt="">
      <div class="thumb-blur" />
    </div>
    <!-- actions -->
    <div class="item__detail-actions">
      <div class="wp__btns-action">
        <div class="actions__title">
          ぬいぐるみ すやすやシャワーズ
        </div>
        <div class="item__detail-buttons">
          <b-button class="btn-orther" @click="closeDetail">
            他の商品をみる！
          </b-button>
          <b-button class="btn-pack" @click="$emit('select-item', itemDetail.id)">
            箱につめる！
          </b-button>
        </div>
      </div>
      <div class="star">
        <span>商品ランク</span>
        <img v-for="(ball, i) in itemDetail.rank" :key="i" src="/pokemom-ball.png" alt="">
      </div>
    </div>
    <BallContainer style="margin:0" class="main__visual-sp" v-if="!isPc"/>
    <div class="item__detail-info">
      <div class="d-flex header">
        <img src="/pokemom-ball.png" alt="">
        <span>商品情報</span>
      </div>
      <div class="content">
        <table class="table info-table">
          <tr class="bg-white">
            <td>
              <div class="border-row">
                商品コード
              </div>
            </td>
            <td>
              <div class="border-row">
                4521132135454
              </div>
            </td>
          </tr>
          <tr class="bg-blue">
            <td>
              <div class="border-row">
                販売日
              </div>
            </td>
            <td>
              <div class="border-row">
                2020/9/17 10:00~
              </div>
            </td>
          </tr>
          <tr class="bg-white">
            <td>
              <div class="border-row">
                サイズ・重量
              </div>
            </td>
            <td>
              <div class="border-row">
                10.5x14x39:cm 107g~
              </div>
            </td>
          </tr>
          <tr class="bg-blue">
            <td>
              <div class="border-row">
                素材
              </div>
            </td>
            <td>
              <div class="border-row">
                ポリエステルポリプロピレン (内部:頭・顔・目)
              </div>
            </td>
          </tr>
          <tr class="bg-white">
            <td>
              <div class="border-row">
                原産国
              </div>
            </td>
            <td>
              <div class="border-row">
                中国
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="back-bg-animation" />
    <div id="add-bg-animation" />
  </div>
</template>

<script>
import BallContainer from '@/components/item/BallContainer'
import { mapGetters } from 'vuex'

export default {
  name: 'ItemDetailPopup',
  components: {
    BallContainer
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    isPc: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      xDown: null,
      yDown: null,
      timeOutLeft: null,
      timeOutRight: null
    }
  },
  computed: {
    ...mapGetters({
      itemDetail: 'item/itemDetail',
      ticket: 'item/ticket',
      totalRankSelected: 'item/totalRankSelected'
    }),
    itemContent () {
      return []
    }
  },
  mounted () {
    document.addEventListener('touchstart', this.handleTouchStart)
    document.addEventListener('touchmove', this.handleTouchMove)
    document.addEventListener('touchend', this.handleTouchEnd)
  },
  beforeDestroy () {
    document.removeEventListener('touchstart', this.handleTouchStart)
    document.removeEventListener('touchmove', this.handleTouchMove)
  },
  methods: {
    closeDetail () {
      this.$emit('close-item-detail')
    },
    handleTouchStart (evt) {
      const firstTouch = this.getTouches(evt)[0]
      this.xDown = firstTouch.clientX
      this.yDown = firstTouch.clientY
    },
    getTouches (evt) {
      return evt.touches ||
        evt.originalEvent.touches
    },
    handleTouchEnd (evt) {
      const leftBg = document.getElementById('back-bg-animation')
      if (leftBg) {
        leftBg.classList.remove('active')
      }
      const rightBg = document.getElementById('add-bg-animation')
      if (rightBg) {
        rightBg.classList.remove('active')
      }
      clearTimeout(this.timeOutLeft)
      clearTimeout(this.timeOutRight)
    },
    handleTouchMove (evt) {
      const self = this
      if (!self.xDown || !self.yDown) {
        return
      }
      const xUp = evt.touches[0].clientX
      const yUp = evt.touches[0].clientY

      const xDiff = self.xDown - xUp
      const yDiff = self.yDown - yUp

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          document.getElementById('back-bg-animation').classList.add('active')
          self.timeOutLeft = setTimeout(function () {
            self.closeDetail()
          }, 500)
        } else {
          document.getElementById('add-bg-animation').classList.add('active')
          self.timeOutRight = setTimeout(function () {
            self.$emit('select-item', self.itemDetail.id)
            const rightBg = document.getElementById('add-bg-animation')
            if (rightBg) {
              rightBg.classList.remove('active')
            }
          }, 500)
        }
      }
      /* reset values */
      self.xDown = null
      self.yDown = null
    }
  }
}
</script>

<style lang="scss" scoped>
  #item__detail {
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    @media only screen and (max-width: 768px) {
      padding: 10px;
      padding-top: 40px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    .item__detail-thumb {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 13px;
      img {
        border-radius: 10px;
        border: 1px solid #01406d;
        min-width: 40%;
        z-index: 10;
      }
      .thumb-blur {
        width: 241px;
        height: 26px;
        background: #00416D 0% 0% no-repeat padding-box;
        border-radius: 7px;
        opacity: 1;
        filter: blur(15px);
        z-index: 5;
        margin-top: -13px;
      }
    }
    .btn__close {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 13px;
      background-color: #01406d;
      border: none;
      border-radius: 5px;
      @media only screen and (max-width: 768px) {
      padding: 4px;
      font-size: 10px;
      display: flex;
      align-items: center;
    }
    }
    .item__detail-info {
      .header {
        padding: 20px 0;
        line-height: 35px;
        color: #01406d;
        font-size: 1rem;
        font-weight: bold;
        img {
          width: 35px;
          margin-right: 20px;
        }
      }
    }
    .item__detail-actions {
         @media only screen and (max-width: 768px) {
           margin-bottom: 15px;
        }
      .wp__btns-action {
         @media only screen and (max-width: 768px) {
          display: flex;
          flex-direction: column-reverse;
        }
      }
      .actions__title {
        border: 2px solid #01406d;
        background-color: #B1DFFF;
        color: #00416D;
        text-align: center;
        border-radius: 10px;
        font-size: 23px;
        line-height: 90px;
      }
      .item__detail-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 7px;
        @media only screen and (max-width: 768px) {
        justify-content: center;
      }
        button {
          border-radius: 10px;
          padding: 0;
          line-height: 60px;
          font-size: 23px;
          width: calc(50% - 3px);
          color: #F58722;
          background-color: #FFDDBE;
          transition: 0.4s;
          border: 2px solid #f58722;
          position: relative;
          outline: none;
          &:focus {
            outline: none;
          }
        @media only screen and (max-width: 768px) {
          border-radius: 0px;
          width: 140px;
        }
          &:hover {
            background-color: #F58722;
            color: #fff;
            &:hover::before,&:hover::after {
              background-color: #F58722;
            }
          }
          &.btn-orther {
          @media only screen and (max-width: 768px) {
            margin-right: 10px;
            border-left: 0;
            &::before {
              content: "";
              position: absolute;
              height: 45.5px;
              width: 45.5px;
              left: -16%;
              background: #FFDDBE;
              border: 2px solid #F58722;
              transform: rotate(45deg);
              top: 7px;
              z-index: -1;
              transition: 0.4s;
            }
        }
      }
          @media only screen and (max-width: 768px) {
            &.btn-pack {
              border-right: 0;
              &::after {
                content: "";
                position: absolute;
                height: 45.5px;
                width: 45.5px;
                right: -17%;
                background: #FFDDBE;
                border: 2px solid #F58722;
                transform: rotate(45deg);
                top: 7px;
                z-index: -1;
                transition: 0.4s;
              }
            }
          }
        }
      }
      .star {
        display: flex;
        justify-content: center;
        background: #01406d;
        border-radius: 10px;
        padding: 12px;
        color: #fff;
        margin-top: 15px;
        span {
          margin-right: 10px;
        }
        img {
          margin-right: 5px;
        }
      }
    }
    .content {
      .info-table {
        tr,td {
          border: none;
        }
        tr {
          &.bg-blue {
            background-color: #DEF2FF;
          }
          td {
            padding: 20px;
            position: relative;
            .border-row {
              font-size: 16px;
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              border: 1px solid #00416D;
              color: #00416D;
              align-items: center;
              display: flex;
              padding: 0 20px;
              box-sizing: border-box;
              border-bottom: none;
              @media only screen and (max-width: 768px) {
              font-size: 14px;
              // white-space: nowrap;
            }
            }
            &:first-child {
              width: 30%;
              .border-row {
                border-right: none;
              }
            }
          }
          &:first-child {
            td {
              &:first-child {
                .border-row {
                  border-top-left-radius: 5px;
                }
              }
              &:last-child {
                .border-row {
                  border-top-right-radius: 5px;
                }
              }
            }
          }
          &:last-child {
            td {
              .border-row {
                border-bottom: 1px solid #013f6d;
              }
              &:first-child {
                .border-row {
                  border-bottom-left-radius: 5px;
                }
              }
              &:last-child {
                .border-row {
                  border-bottom-right-radius: 5px;
                }
              }
            }
          }
        }
      }
    }
    #back-bg-animation, #add-bg-animation {
      position: fixed;
      display: none;
      height: 100px;
      width: 21px;
      background: #01406d;
      align-items: center;
      border-radius: 100%/50%;
      &.active {
        display: flex;
      }
      animation: sonarWave 2s linear infinite;
    }
    #back-bg-animation {
      top: 38%;
      left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    #add-bg-animation {
      top: 38%;
      right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    @keyframes sonarWave {
      from {
        opacity: 0.4;
      }
      to {
        transform: scale(3);
        opacity: 0;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    #item__detail {
      .actions__title {
        font-size: 14px!important;
        line-height: 60px!important;
      }
      .item__detail-buttons {
        margin-bottom: 20px;
        button {
          font-size: 16px!important;
        }
      }
    }
  }
</style>
