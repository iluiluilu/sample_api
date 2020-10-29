<template>
  <div id="main-app">
    <div class="app-content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { LIST_PAGE_LAYOUT } from '@/assets/constants'

export default {
  components: {
  },
  computed: {
    isShowMenu () {
      return !LIST_PAGE_LAYOUT.includes(this.$route.name)
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/variables.scss';
  @import '@/assets/scss/commom.scss';
  #main-app {
    height: 100vh;
    background: url(/background-3.png);
    position: relative;
    width: 100%;
    margin: auto;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    display:flex;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    width: 1px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }
  @media only screen and (max-width: 750px) {
    #main-app {
      width: auto!important;
    }
  }
    .main__visual-sp {display: none;}
  @media only screen and (max-width: 768px){
    .main__visual-pc {
      display: none;
    }
    .main__visual-sp {
      display: inherit;
    }
  }
</style>
