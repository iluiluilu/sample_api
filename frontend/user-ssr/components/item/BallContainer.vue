<template>
  <div class="ball__container">
      <div class="ball__sample">
        <img src="/pokemon-transparent.png" alt="">
      </div>
      <div class="ball__unchoose">
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
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BallContainer',
  props: {

  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      ticket: 'item/ticket',
      totalRankSelected: 'item/totalRankSelected'
    })
  }
}
</script>

<style lang="scss">
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
</style>
