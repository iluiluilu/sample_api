<template>
  <div>
    <div id="top-page">
      <section id="top-header">
        <div class="logo">
          <img src="/header_logo.png" alt="">
        </div>
        <a target="_blank" href="https://www.pokemoncenter-online.com/?main_page=login" class="btn-back">
          <b-icon icon="caret-right-fill" />
          {{ $t('top_screen.button.back') }}
          <b-icon icon="caret-left-fill" />
        </a>
      </section>

      <section id="top-body">
        <img src="/Pokeball.png">
        <span class="title">タイトルバナー</span>
        <img src="/Pokeball.png">
        <div class="bg-opacity" />
      </section>

      <section id="top-center">
        <span @click="redirectHome">詰め放題を始める</span>
        <div class="top-center-shadow"></div>
      </section>

      <section class="list-item-container">
        <div class="container-detail">
          <img class="detail" src="/top-group-2.png" alt="">
          <div class="detail-content">
            <h5 class="title">
              チケットステータス
            </h5>
            <hr class="hr-detail">
            <h6>
              <span class="text-left">チケット購入日 : </span>
              <span class="text-right">3月12日</span>
            </h6>
            <h6>
              <span class="text-left">コース名 : </span>
              <span class="text-right">ABCコース</span>
            </h6>
            <h6>
              <span class="text-left">プレイ日 : </span>
              <span class="text-right">10月2日</span>
              <span> or プレイ前</span>
            </h6>
            <h6>
              <span class="text-left">詰めた商品 : </span>
              <span>プレイ前 or</span>
            </h6>
          </div>
        </div>
        <div id="list-item" class="list-item">
          <div class="title">
            <span>詰めた商</span>
          </div>
          <div id="list-item-ct-mobile" class="item-ct row main__visual-sp">
            <div v-for="(item, index) in items" :key="index + itemKey" class="po__item-ct">
              <Item :item-height="itemHeight" :item="item" :show-star="false" />
            </div>
          </div>
          <div id="list-item-ct" class="item-ct main__visual-pc">
            <VueSlickCarousel v-bind="settings">
              <div v-for="(item, index) in items" :key="index + itemKey">
                <Item :item="item" :item-height="itemHeight" :show-star="false" class="item__po-slide" />
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </section>

      <section id="top-footer">
        {{ $t('top_screen.label.copyright_top') }}
        <br>
        {{ $t('top_screen.label.copyright_footer') }}
      </section>
    </div>
    <BackgroundGeneral />
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { mapGetters } from 'vuex'
import Item from '@/components/item/Item'
import BackgroundGeneral from '@/components/BackgroundGeneral'
export default {
  name: 'TopPage',
  loading: true,
  components: {
    Item,
    BackgroundGeneral,
    VueSlickCarousel
  },
  data () {
    return {
      items: [
        {
          id: 1,
          item_code: 'Item 1',
          name: 'Ec Game 1',
          rank: 4,
          image_path: '/pikachu-item.jpg'
        },
        {
          id: 2,
          item_code: 'Item 2',
          name: 'Ec Game 1',
          rank: 1,
          image_path: '/pikachu-item.jpg'
        },
        {
          id: 3,
          item_code: 'Item 3',
          name: 'Ec Game 3',
          rank: 2,
          image_path: '/pikachu-item.jpg'
        },
        {
          id: 3,
          item_code: 'Item 3',
          name: 'Ec Game 3',
          rank: 3,
          image_path: '/pikachu-item.jpg'
        },
        {
          id: 4,
          item_code: 'Item 4',
          name: 'Ec Game 3',
          rank: 3,
          image_path: '/pikachu-item.jpg'
        },
        {
          id: 1,
          item_code: 'Item 1',
          name: 'Ec Game 1',
          rank: 4,
          image_path: '/pikachu-item.jpg'
        },
        {
          id: 2,
          item_code: 'Item 2',
          name: 'Ec Game 1',
          rank: 1,
          image_path: '/pikachu-item.jpg'
        },
        {
          id: 3,
          item_code: 'Item 3',
          name: 'Ec Game 3',
          rank: 2,
          image_path: '/pikachu-item.jpg'
        },
        {
          id: 3,
          item_code: 'Item 3',
          name: 'Ec Game 3',
          rank: 3,
          image_path: '/pikachu-item.jpg'
        },
        {
          id: 4,
          item_code: 'Item 4',
          name: 'Ec Game 3',
          rank: 3,
          image_path: '/pikachu-item.jpg'
        }
      ],
      itemHeight: 0,
      itemKey: 0,
      settings: {
        dotsClass: 'slick-dots custom-dot-class',
        autoplay: false,
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        focusOnSelect: true,
        touchThreshold: 5,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      // items: 'item/items'
    })
  },
  mounted () {
    this.$nextTick(() => {
      // this.$nuxt.$loading.start()
      // this.$nuxt.$loading.finish()
    })
    document.addEventListener('dragleave', function (event) {
      if (event.target.id === 'cart') {
        console.log(1)
      }
    })
    window.addEventListener('resize', this.handleSize)
    this.handleSize()
  },
  methods: {
    redirectHome () {
      this.$router.push('/play')
    },
    handleSize () {
      this.itemHeight = document.getElementById('list-item-ct').offsetHeight
      this.itemKey++
    }
  }
}
</script>

<style lang="scss">
  #top-page {
    max-width: 1080px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 56.2vw;
  }
  .item {
    border: 1px solid #00416D;
    border-radius: 10px;
  }
  #top-header {
    height: 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      height: 80%;
      float: left;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      color: #FF5454;
      font-weight: bold;
      text-align: center;
    }
    .btn-back {
      background-color: #00416D;
      border-radius: 9px;
      height: 60px;
      font-size: 20px;
      color: #fff;
      display: inline-flex;
      align-items: center;
    }
  }
  #top-body {
    border-radius: 10px;
    display: flex;
    height: 33%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: url(/header_bg.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
  @media only screen and (max-width: 768px) {
    border-radius: 0;
  }
    img {
      z-index: 1;
      width: 57px;
      height: 57px;
    }
    .title {
      z-index: 1;
      color: #FFFFFF;
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      height: 10%;
      margin: 0;
      font-size: 40px;
      line-height: 40px;
      margin: 0px 70px;
    }
    .bg-opacity {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #6c7dada1;
      z-index: 0;
      border-radius: 10px;
      @media only screen and (max-width: 768px) {
        border-radius: 0;
      }
    }
  }

  #top-center {
    height: 8%;
    position: relative;
    .top-center-shadow {
      position: absolute;
      height: 50px;
      width: 50%;
      bottom: -10px;
      background: #333;
      filter: blur(40px);
      left: 50%;
      transform: translateX(-50%);
      z-index: 0;
    }
    span {
      cursor: pointer;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      font-weight: 600;
      color: #fff;
      width: 60%;
      margin: auto;
      background: url(/group-header.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: relative;
      z-index: 1;
    }
  }
  .list-item-container {
    padding: 10px 30px;
    background-color: #00416D;
    height: 40.6%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 10px;
    @media only screen and (max-width: 768px) {
      padding: 10px 7px;
    }
    .container-detail {
      height: 40%;
      width: 100%;
      position: relative;
      img {
        height: 100%;
        width: 100%;
        object-fit: unset;
      }
      .detail-content {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        color: #fff;
        .title {
          font-size: 1em;
          margin: 0;
          height: 22%;
          line-height: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
        .hr-detail {
          background-color: #8EF8F4;
          width: 80%;
          height: 1px;
          border-radius: 1px;
          margin-top: 0.5em;
          margin-bottom: 0.5em;
        }
        h6 {
          font-size: 0.8em;
          margin: 0;
          height: 15%;
          .text-right {
            color: #F58722;
          }
        }
      }
    }
    #list-item {
      position: relative;
      height: 53%;
      width: 100%;
      margin: 0;
      background: #FFE8D4;
      border-radius: 10px;
      padding: 25px 20px 23px 20px;
      .title {
        position: absolute;
        width: 100%;
        height: 30px;
        text-align: center;
        top: -15px;
        span {
          width: 37%;
          background-color: #F58722;
          display: block;
          margin: auto;
          border-radius: 10px;
          color: #fff;
          height: 30px;
          line-height: 30px;
        }
      }
      .item-ct {
        width: 100%;
        height: 100%;
        // overflow-y: scroll;
        .item__po-slide {
          // height: 168px!important;
        }
        &::-webkit-scrollbar {
          display: none;
        }
        .item-img,.item-img img {
          border-radius: 10px;
          max-height: 168px;
        }
        .item-img img {
          object-fit: fill;
        }
        .po__item-ct {
          margin: 0 2.5px 16px 2.5px;
        }
      }
      .slick-slide {
        padding: 0 10px;
      }
      .slick-slider {
        height: 100%;
        display: flex;
      }
      .slick-dots li.slick-active button:before {
        color: inherit;
        background: #F58722;
      }
      .slick-dots li button:before {
        color: inherit;
        border: 2px solid #F58722;
        border-radius: 999px;
        font-size: 20px;
        width: 14px;
        height: 14px;
      }
    }
  }
  #top-footer {
    background-color: #00416D;
    font-size: .6rem;
    text-align: center;
    color: #fff;
    padding: 10px 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  @media only screen and (max-width: 768px) {
    .app-content {
      height: 100vh;
      // overflow-y: auto;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    #top-page {
      width: 100vw;
      overflow-x: hidden;
      overflow-y: auto;
      height: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      #top-header {
        padding: 0 10px;
        height: 22vw;
        .logo {
          height: 60%;
        }
        .btn-back {
          height: 40px;
          font-size: 14px;
        }
      }
      #top-body {
        height: 50vw;
        .title {
          line-height: 29px;
          font-size: 29px;
          margin: 0px 16px;
        }
        img {
          width: 30px;
          height: 30px;
        }
      }
      #top-center {
        height: 20vw;
        margin: 35px 10px;
        span {
          width: 100%;
        }
      }
      .list-item-container {
        height: 177vw;
        .container-detail {
          height: 30%;
        }
        #list-item {
          height: 60%;
          @media only screen and (max-width: 768px){
            padding: 27px 6.5px 23px 6.5px;
            border-radius: 0;
          }
        }
      }
      #top-footer {
        margin-top: 25px;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
  @media screen and (min-device-width: 769px) and (max-device-width: 900px) and (orientation: landscape) {
    #top-page {
      overflow-y: auto;
      &::-webkit-scrollbar {
        display:none;
      }
    }
    #top-header,#top-center,.list-item-container,#top-body {
      height: auto;
    }
    #top-center {
      margin: 15px 0;
    }
    #top-center span {
      width: auto;
      padding-top: 16px;
      padding-bottom: 12px;
      font-size: 25px;
    }
    #top-body img {
      height: auto;
      width: auto;
    }
    #top-body .title {
      height: auto;
      font-size: 30px;
      margin: 0 30px;
      padding: 60px 0;
    }
    #top-footer {
      padding: 10px;
      font-size: 9px;
    }
    .list-item-container {
      margin-bottom: 10px;
    }
    .container-detail {
      min-height: 170px;
      position: relative;
      &.detail {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 0;
      }
      .detail-content {
        position: relative;
        z-index: 1;
      }
    }
    .item__po-slide {
      min-height: 111px;
    }
  }
    .main__visual-sp {display: none;}
  @media only screen and (max-width: 768px){
    .main__visual-pc {
      display: none;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
    .main__visual-sp {
      display: inherit;
    }
    .item-ct.main__visual-sp {
      display: grid;
      grid-template-columns: 6fr 6fr;
      justify-items: center;
      margin: 0;
      overflow-y: auto;
    }
  }

</style>
