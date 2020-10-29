<template>
  <div
    id="cart"
    :class="{'draging': dragIn}"
    @dragenter="dragEnter"
    @dragleave="dragLeave"
    @drop="onDrop"
    @dragover="allowDrop"
  >
    <div v-for="(item, index) in itemSelected" :key="index">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      cartItems: [],
      dragIn: false
    }
  },
  computed: {
    ...mapGetters({
      itemSelected: 'item/itemSelected'
    })
  },
  methods: {
    onDrop (event) {
      const idSelect = event.dataTransfer.getData('id')
      this.$store.dispatch('item/selectItem', idSelect)
    },
    allowDrop (event) {
      event.preventDefault()
    },
    dragEnter () {
    },
    dragLeave () {
    }
  }
}
</script>

<style lang="scss">
  #cart {
    width: 100%;
    height: 100px;
    border: 1px solid gray;
    overflow: scroll;
    &.draging {
      background-color: red;
    }
  }
</style>
