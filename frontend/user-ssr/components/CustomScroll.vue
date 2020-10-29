<template>
  <div id="custom-scroll">
    <div id="scroll-viewer">
      <slot />
    </div>
    <div id="container-scroll" class="scroll">
      <input
        id="scroll"
        v-model="scrollTo"
        class="slider"
        type="range"
        min="0"
        max="100"
        @input="changeScroll"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scroll',
  props: {
    el: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      scrollTo: 0
    }
  },
  mounted () {
    this.handleWindowSize()
    window.addEventListener('resize', this.handleWindowSize)
    document.getElementById(this.el).addEventListener('scroll', this.revertScroll)
  },
  methods: {
    changeScroll () {
      const element = document.getElementById(this.el)
      const percent = this.scrollTo / 100
      element.scrollTop = (document.getElementById('scroll-viewer').scrollHeight - element.offsetHeight) * percent
    },
    revertScroll (event) {
      event.preventDefault()
      const element = document.getElementById(this.el)
      this.scrollTo = (element.scrollTop) / (document.getElementById('scroll-viewer').scrollHeight - element.offsetHeight) * 100
    },
    handleWindowSize () {
      document.getElementById('scroll').style.width = (document.getElementById('container-scroll').offsetHeight * 0.9) + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
  // Base Colors
  $shade-10: #8EF8F4 !default;
  $shade-1: #d7dcdf !default;
  $shade-0: #fff !default;
  $teal: #1abc9c !default;
  // Range Slider
  $range-width: 100% !default;

  $range-handle-color: $shade-10 !default;
  $range-handle-color-hover: $teal !default;
  $range-handle-size: 25px !default;

  $range-track-color: #8EF8F4 !default;
  $range-track-height: 3px !default;

  $range-label-color: $shade-10 !default;
  $range-label-width: 60px !default;
  #custom-scroll {
    height: 100%;
    position: relative;
    display: flex;
    .scroll {
      position: absolute;
      top: 0;
      height: 100%;
      transform: rotate(90deg);
      right: 2%;
      .slider {
        -webkit-appearance: none;
        width: calc(100% - (#{$range-label-width + 13px}));
        height: $range-track-height;
        border-radius: 5px;
        background: $range-track-color;
        outline: none;
        padding: 0;
        margin: 0;
        width: 322px;
        &::-webkit-slider-thumb {
          appearance: none;
          width: $range-handle-size;
          height: $range-handle-size;
          border: 3px solid $shade-10;
          border-radius: 50%;
          background: #00416D;
          cursor: pointer;
          transition: background .15s ease-in-out;

          &:hover {
            background: $range-handle-color-hover;
          }
        }
        &:active::-webkit-slider-thumb {
          background: $range-handle-color-hover;
        }

        &::-moz-range-thumb {
          width: $range-handle-size;
          height: $range-handle-size;
          border: 0;
          border-radius: 50%;
          background: $range-handle-color;
          cursor: pointer;
          transition: background .15s ease-in-out;

          &:hover {
            background: $range-handle-color-hover;
          }
        }

        &:active::-moz-range-thumb {
          background: $range-handle-color-hover;
        }
        // Focus state
        &:focus {
          &::-webkit-slider-thumb {
            box-shadow: 0 0 0 3px $shade-0,
                        0 0 0 6px $teal;
          }
        }
      }
    }
  }

  #scroll-viewer {
    display: flex;
    flex-wrap: wrap;
    #list-item {
      z-index: 20;
    }
  }
</style>
