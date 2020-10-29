<template>
  <div id="header" :class="'step-' + step">
    <p class="btn-arow">
      <img src="/Pokeball.png" alt="">
    </p>
    <div class="title">
      <label :class="{'active': isHelpScreen && step === 1}">
        {{ title ? title : $t('help_screen.label.title') }}
        <b-icon icon="caret-down-fill" />
      </label>
    </div>
    <p class="btn-arow">
      <img src="/Pokeball.png" alt="">
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      isHelpScreen: 'help/isHelpScreen',
      step: 'help/step'
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/variables.scss';
  #header {
    width: 100%;
    height: 10%;
    background-color: #00416D;
    position: relative;
    &.step-1 {
      z-index: 10;
    }
    .btn-arow {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15%;
      float: left;
      height: 100%;
      background: none!important;
      border: none;
      img {
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }
    .title {
      width: 70%;
      float: left;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin: 0;
      font-size: 24px;
      cursor: pointer;
      label {
        width: 404px;
        height: 74px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        &.active {
          border: 2px solid #E3BC1E;
        }
      }
    }
  }
  @media only screen and (max-width: 750px) {
    #header {
      width: auto!important;
      .title {
        font-size: 1rem;
      }
    }
  }
</style>
