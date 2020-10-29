<template>
  <div id="base__page">
    <div class="base__content">
      <NotiGlobal :class="{'btn__x': isOpenCart}" @close-cart="closeCart" v-if="!showDetail || isPc"/>
      <div class="base__content-wp">
        <div class="base__content-bodywp" :style="[isOpenCart ? {display:'none'} : {display:'block'}]">
          <div class="select__cat" :class="{'active':openSelect}" v-if="!this.showDetail || isPc">
            <div class="select__cat-head" @click="toggleSelect">
              <span :class="{'step-active': step === 1}">
                {{ categorySelected.name ? categorySelected.name : "全品"}}
              </span>
              <span class="icon__drop" :class="{'step-active': step === 1}" />
              <div :class="{'step-active wrap': step === 1}" />
            </div>
            <div class="select__cat-body">
              <div
                v-for="(category, index) in categories"
                :key="index"
                class="select__item"
                :class="{'active': selectedCategoryId === category.id}"
                @click="selectCategory(category)"
              >
                {{ category.name }}
              </div>
            </div>
          </div>
          <div class="base__content-body" :class="{'item-detail': showDetail}">
            <div id="po__items" class="po__items" :style="[this.showDetail && isLandscape ? {height:'100vh'} : '']">
              <div v-if="items.length > 0 && !helpMode" class="po__items--wp">
                <div
                  v-for="(item, index) in items"
                  :key="index"
                  class="po__item"
                  draggable="true"
                  @click="showItemDetail(item)"
                  @dragstart="dragItem(item.id)"
                >
                  <div class="po__item-thumb">
                    <img draggable="false" :src="item.image_path" alt="">
                  </div>
                  <div class="po__item-ball">
                    <img v-for="(ball, i) in item.rank" :key="i" draggable="false" src="/pokemom-ball.png" alt="">
                  </div>
                </div>
              </div>
              <!-- help mode item -->
              <div v-if="helpMode" class="po__items--wp">
                <div
                  v-for="(item, i) in itemHelpDemo"
                  :key="i"
                  class="po__item"
                >
                  <div class="po__item-thumb">
                    <img :src="item.image_path" alt="" :class="{'step-active': step === 3 && i === 0}">
                    <div v-if="step === 3 && i === 0" class="step-active wrap" />
                  </div>
                  <div class="po__item-ball" :class="{'step-active': step === 2 && i === 1}">
                    <img v-for="(ball, j) in item.rank" :key="j" src="/pokemom-ball.png" alt="">
                    <div v-if="step === 2 && i === 1" class="step-active wrap" />
                  </div>
                </div>
              </div>
              <div v-if="items.length === 0 && !helpMode" class="po__items--wp">
                <div class="po__items--no_data">
                  一致するアイテムがありません
                </div>
              </div>
            </div>
            <ItemDetailPopup
              v-if="showDetail"
              :item="itemDetailSelect"
              :isPc="isPc"
              @close-item-detail="closeItemDetail"
              @select-item="selectItem"
            />
          </div>
          <transition name="fade">
            <PopupU006 v-if="showpopupU006" @show-popup-status="showPopupStatus" @closePopupU006="closePopupU006" />
          </transition>
          <PopupStatus v-if="isOpenPopupStatus && !popupStatus" :class="{pop__error: !popupStatus}" @closePopupStatus="closePopupStatus">
            <div class="popup__content">
              <div class="popup__content--text">
                選んでいただいた <br>
                「商品A」<br>
                「商品B」<br>
                の確保ができませんでした。<br>
                恐れ入りますが他の商品をお選びください。
              </div>
              <button class="popup__content--btn btn__close" @click="closePopupStatus">
                閉 じ る
              </button>
            </div>
          </PopupStatus>
          <PopupStatus v-else-if="isOpenPopupStatus && popupStatus" :class="{pop__success: popupStatus}">
            <div class="popup__content">
              <div class="popup__content--text">
                詰め放題（仮）をプレイいただきありがとうございます。<br>
                準備が整い次第、商品出荷をお知らせのご連絡をいたし <br>
                ます。<br><br>
                到着をお待ちください
              </div>
              <button class="popup__content--btn btn__close" @click="redirectHome">
                TOPにもどる
              </button>
            </div>
          </PopupStatus>
          <PopupStatus v-if="fullBoxError" :class="{full__error: fullBoxError}" @closePopupStatus="closePopupStatus">
            <div class="popup__content">
              <div class="popup__content--text">
                その商品は入らないよ
              </div>
              <span class="btn-close" @click="closeFullBoxError">
                <b-icon icon="x" />
              </span>
            </div>
          </PopupStatus>

          <div v-if="helpMode" class="tutorial">
            <!-- step 1 -->
            <div v-if="step === 1" class="step step-1">
              <img class="direct-path" src="/path-direct.png" alt="">
              <div class="tutorial-title">
                <img src="/path-circle.png" alt="">
                <span class="title" v-html="$t('play_screen.label.tutorial_1')" />
              </div>
              <img class="pngwing" src="/pngwing.png" alt="">
            </div>
            <!-- step 2 -->
            <div v-if="step === 2" class="step step-2">
              <div class="tutorial-title">
                <img src="/around.png" alt="">
                <span class="title" v-html="$t('play_screen.label.tutorial_2')" />
              </div>
              <img class="direct-path" src="/path-direct.png" alt="">
              <img class="pngwing" src="/satoshi.png" alt="">
            </div>
            <!-- step 3 -->
            <div v-if="step === 3" class="step step-3">
              <img class="direct-path direct-path-1" src="/path-direct.png" alt="">
              <div class="tutorial-title">
                <img src="/around.png" alt="">
                <span class="title" v-html="$t('play_screen.label.tutorial_3')" />
              </div>
              <img class="direct-path direct-path-2" src="/path-direct.png" alt="">
              <img class="pngwing" src="/satoshi-pokemon.png" alt="">
            </div>
            <!-- step 4 -->
            <div v-if="step === 4" class="step step-4">
              <img class="pngwing" src="/satoshi-ball.png" alt="">
              <div class="tutorial-title">
                <img src="/around.png" alt="">
                <span class="title" v-html="$t('play_screen.label.tutorial_4')" />
              </div>
              <img class="direct-path" src="/path-direct.png" alt="">
            </div>
            <!-- step 5 -->
            <div v-if="step === 5" class="step step-5">
              <img class="pngwing" src="/satoshi-ball.png" alt="">
              <div class="tutorial-title">
                <img src="/around.png" alt="">
                <span class="title">詰め終わったら<br>ここを押そう</span>
              </div>
              <img class="direct-path" src="/path-direct.png" alt="">
            </div>
          </div>
        </div>
        <!-- drag -->
        <PlayCart
          :class="{'open__cart': isOpenCart}"
          :help-mode="helpMode && (step === 3 || step === 4)"
          @start-help-mode="startHelpMode"
          @show-u006="showU006"
          @open-cart="openCart"
          @open-help="helpMode = true"
        />
      </div>
      <transition name="fade">
        <PopupU006 v-if="showpopupU006" @show-popup-status="showPopupStatus" @closePopupU006="closePopupU006" />
      </transition>
    </div>
    <BackgroundGeneral />
  </div>
</template>

<script>
import BackgroundGeneral from '@/components/BackgroundGeneral'
import NotiGlobal from '@/components/NotiGlobal'
import ItemDetailPopup from '@/components/item/ItemDetailPopup'
import PopupU006 from '@/components/popup/PopupU006.vue'
import PopupStatus from '@/components/popup/PopupStatus.vue'
import { mapGetters } from 'vuex'
import PlayCart from '@/components/PlayCart'

export default {
  name: 'Play',
  conponents: {
    BackgroundGeneral,
    NotiGlobal,
    ItemDetailPopup,
    PopupU006,
    PopupStatus,
    PlayCart
  },
  data () {
    return {
      isOrientation: false,
      isLandscape: false,
      openSelect: false,
      isPc: true,
      isOpenCart: false,
      itemDetailSelect: {
        image_path: '/pikachu-item.jpg'
      },
      showDetail: false,
      showpopupU006: false,
      popupStatus: true,
      isOpenPopupStatus: false,
      categories: [
        {
          id: 0,
          name: '全品'
        },
        {
          id: 1,
          name: 'ぬいぐるみ・おもちゃ'
        },
        {
          id: 2,
          name: 'ゲーム'
        },
        {
          id: 3,
          name: 'カードゲーム'
        },
        {
          id: 4,
          name: '文房具'
        },
        {
          id: 5,
          name: '日用品'
        },
        {
          id: 6,
          name: 'キッチン用品'
        },
        {
          id: 7,
          name: 'キッチン用品'
        },
        {
          id: 8,
          name: 'スマホ・PC用品'
        },
        {
          id: 9,
          name: '雑誌・小物'
        },
        {
          id: 10,
          name: 'バッグ・ポーチ・財布'
        },
        {
          id: 11,
          name: 'その他'
        }
      ],
      cartItems: [
      ],
      showFullBoxError: false,
      helpMode: false,
      itemHelpDemo: [
        {
          id: 1,
          item_code: 'Item 1',
          name: 'Ec Game 1',
          rank: 5,
          image_path: '/pikachu-item.jpg',
          category_id: 1
        },
        {
          id: 2,
          item_code: 'Item 2',
          name: 'Ec Game 1',
          rank: 3,
          image_path: '/pikachu-item.jpg',
          category_id: 1
        },
        {
          id: 3,
          item_code: 'Item 3',
          name: 'Ec Game 3',
          rank: 1,
          image_path: '/pikachu-item.jpg',
          category_id: 2
        },
        {
          id: 4,
          item_code: 'Item 3',
          name: 'Ec Game 3',
          rank: 3,
          image_path: '/pikachu-item.jpg',
          category_id: 1
        },
        {
          id: 5,
          item_code: 'Item 4',
          name: 'Ec Game 3',
          rank: 1,
          image_path: '/pikachu-item.jpg',
          category_id: 3
        },
        {
          id: 6,
          item_code: 'Item 1',
          name: 'Ec Game 1',
          rank: 4,
          image_path: '/pikachu-item.jpg',
          category_id: 4
        },
        {
          id: 7,
          item_code: 'Item 2',
          name: 'Ec Game 1',
          rank: 1,
          image_path: '/pikachu-item.jpg',
          category_id: 3
        },
        {
          id: 8,
          item_code: 'Item 3',
          name: 'Ec Game 3',
          rank: 2,
          image_path: '/pikachu-item.jpg',
          category_id: 1
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      items: 'item/itemsFilter',
      fullBoxError: 'item/fullBoxError',
      selectedCategoryId: 'item/selectedCategoryId',
      step: 'help/step',
      categorySelected: 'item/categorySelected'
    })
  },
  mounted () {
    const self = this
    document.addEventListener('click', function () {
      self.changeStep()
    })
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      const basePage = document.querySelector('#base__page')
      if (window.innerWidth > 768) {
        this.isPc = true
      } else {
        this.isPc = false
      }
      if (window.innerHeight > window.innerWidth) {
        this.isLandscape = true
        this.isOrientation = false
      } else {
        this.isOrientation = true
        this.isLandscape = false
      }
      if (this.isLandscape) {
        basePage.scrollTop = 0
      }
    },
    openCart () {
      if (!this.isOpenCart && !this.isPc) {
        this.isOpenCart = true
      } else {
        this.showpopupU006 = true
      }
    },
    closeCart () {
      this.isOpenCart = false
    },
    startHelpMode () {
      document.getElementById('po__items').scrollTop = 0
      this.helpMode = true
    },
    changeStep () {
      if (this.helpMode) {
        this.openSelect = false
        this.showDetail = false
        if (this.step === 4) {
          this.$store.dispatch('help/changeStep', 0)
          this.helpMode = false
          return
        }
        this.$store.dispatch('help/changeStep', this.step + 1)
      }
    },
    toggleSelect () {
      this.openSelect = !this.openSelect
    },
    closeItemDetail () {
      this.showDetail = false
    },
    showItemDetail (item) {
      this.$store.dispatch('item/selectItemDetail', item)
      this.showDetail = true
    },
    showU006 () {
      // this.isOpenCart = false
      this.showDetail = false
      this.openSelect = false
      this.showpopupU006 = true
    },
    closePopupU006 () {
      this.showpopupU006 = false
    },
    showPopupStatus () {
      this.showpopupU006 = false
      this.isOpenPopupStatus = true
      this.popupStatus = !this.popupStatus
    },
    closePopupStatus () {
      this.isOpenPopupStatus = false
    },
    redirectHome () {
      this.$store.dispatch('item/removeAllItem')
      this.$router.push('/')
    },
    selectCategory (category) {
      this.$store.dispatch('item/selectCategory', category)
      if (category.id === 0) {
        this.$store.dispatch('item/selectCategoryId', null)
      } else {
        this.$store.dispatch('item/selectCategoryId', category.id)
      }
      this.openSelect = false
    },
    dragItem (id) {
      event.dataTransfer.setData('id', id)
    },
    closeFullBoxError () {
      this.$store.dispatch('item/changeFullBoxError', false)
    },
    selectItem (id) {
      this.$store.dispatch('item/selectItem', id)
      this.$nextTick(function () {
        const objDiv = document.getElementById('drag__items')
        if (objDiv) {
          objDiv.scrollTop = objDiv.scrollHeight
        }
      })
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/play.scss';
</style>
