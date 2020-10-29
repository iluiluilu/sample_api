<template>
  <div id="app-footer">
    <div class="top">
      <img class="img-group" src="/group.png">
      <div class="container-rank" :class="{'active': step === 3 || step === 4}">
        <img class="poke" src="/pokemon-transparent.png" alt="">
        <Rank class="rank" :max-rank="maxRank" :star="star" :width="starWidth" />
      </div>
    </div>
    <div class="action">
      <div class="btn-container">
        <b-button class="guide">
          {{ $t('commons.button.guide') }}
        </b-button>
      </div>
      <div class="btn-container">
        <b-button class="fill-up">
          <span :class="{'active': step === 5}">
            {{ $t('commons.button.fill_up') }}
          </span>
          <div v-if="step === 5" class="around" />
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Rank from '@/components/item/Rank'
import { mapGetters } from 'vuex'

export default {
  name: 'Footer',
  components: {
    Rank
  },
  data () {
    return {
      maxRank: 8,
      star: 2,
      starWidth: '20px'
    }
  },
  computed: {
    ...mapGetters({
      step: 'help/step'
    })
  },
  mounted () {
    window.addEventListener('resize', this.handleWidth)
    this.handleWidth()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleWidth)
  },
  methods: {
    handleWidth () {
      const windowWidth = window.innerWidth
      if (windowWidth >= 750) {
        this.starWidth = '33px'
      } else {
        this.starWidth = '20px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/variables.scss';
  #app-footer {
    padding: 0px 15px;
    height: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .top {
      position: relative;
      max-width: 790px;
      width: 100%;
      margin: 0 auto;
      height: 60%;
      justify-items: center;
      .img-group {
        height: 100%;
        width: 100%;
      }
      div.container-rank {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        &.active {
          z-index: 10;
          border: 2px solid #E3BC1E;
          border-radius: 10px;
        }
      }
      align-items: center;
      .poke {
        width: 273px;
        height: 192px;
        float: left;
      }
    }
    .action {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 790px;
      margin: 0 auto;
      height: 18%;
      .btn-container {
        width: 50%;
        button {
          width: 90%;
          height: 100%;
          padding: 0;
          font-size: 24px;
          border-radius: 10px;
          border: 1px solid #00416D;
          float: left;
          &.guide {
            color: #00416D;
            background: #fff;
            margin-right: 30px;
          }
          &.fill-up {
            color: #fff;
            background: #00416D;
            position: relative;
            span {
              position: relative;
              width: 80%;
              margin: auto;
              background: #01406d;
              height: 90%;
              display: flex;
              justify-content: center;
              align-items: center;
              &.active {
                z-index: 10;
              }
            }
            div.around {
              position: absolute;
              width: 90%;
              height: 120%;
              top: -6px;
              left: 5%;
              border-radius: 10px;
              border: 2px solid #E3BC1E;
              z-index: 10;
            }
          }
        }
      }
    }
    @media only screen and (max-width: 750px) {
      .poke {
        width: 192px !important;
        height: 167px !important;
      }
      .action {
        width: 100%!important;
      }
    }
  }
</style>
