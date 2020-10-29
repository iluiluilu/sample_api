<template>
  <div
    class="item"
    draggable="true"
    :style="{height: itemHeight === 0 ? 'auto' : itemHeight + 'px'}"
    @dragstart="drag"
  >
    <div class="item-img">
      <img class="img-fluid" :class="{'active': step === 3 && active}" :src="item.image_path" alt="">
      <div v-if="step === 3 && active" class="around" />
    </div>
    <div v-if="showStar" class="rank-container" :class="{'active': step === 2 && active}">
      <Rank :star="item.rank" />
      <div class="around" />
    </div>
  </div>
</template>

<script>
import Rank from '@/components/item/Rank'
import { mapGetters } from 'vuex'

export default {
  name: 'Item',
  components: {
    Rank
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    active: {
      type: Boolean,
      default: false
    },
    showStar: {
      type: Boolean,
      default: true
    },
    itemHeight: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters({
      step: 'help/step'
    })
  },
  methods: {
    drag (event) {
      event.dataTransfer.setData('id', this.item.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    max-width: 300px;
    margin: auto;
    position: relative;
    .item-img {
      height: 100%;
      max-height: 300px;
      img {
        height: 100%;
        max-height: 300px;
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        &.active {
          z-index: 10;
          position: relative;
        }
      }
      .around {
        width: 106%;
        height: 105%;
        position: absolute;
        top: -7px;
        left: -8px;
        border: 2px solid #E3BC1E;
        z-index: 10;
        border-radius: 10px;
      }
    }
    .rank-container {
      position: absolute;
      bottom: 0;
      top: 100%;
      height: 57px;
      width: 100%;
      background: #01406d;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      &.active {
        .rank {
          width: 90%;
          display: flex;
          justify-content: center;
          height: 90%;
          justify-content: center;
          align-items: center;
          z-index: 10;
          background: #01406d;
        }
        .around {
          width: 97%;
          position: absolute;
          height: 122%;
          border: 2px solid #E3BC1E;
          z-index: 10;
          border-radius: 10px;
        }
      }
    }
  }
</style>
