export const state = () => ({
  ticket: {
    max_rank: 14
  },
  items: [
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
      rank: 1,
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
    },
    {
      id: 9,
      item_code: 'Item 3',
      name: 'Ec Game 3',
      rank: 2,
      image_path: '/pikachu-item.jpg',
      category_id: 2
    },
    {
      id: 10,
      item_code: 'Item 4',
      name: 'Ec Game 3',
      rank: 1,
      image_path: '/pikachu-item.jpg',
      category_id: 2
    },
    {
      id: 11,
      item_code: 'Item 4',
      name: 'Ec Game 3',
      rank: 1,
      image_path: '/pikachu-item.jpg',
      category_id: 4
    },

    {
      id: 12,
      item_code: 'Item 12',
      name: 'Ec Game 3',
      rank: 4,
      image_path: '/pikachu-item.jpg',
      category_id: 5
    }
  ],
  cartItemsSelected: [],
  cartItemIdSelected: [],
  totalRankSelected: 0,
  fullBoxError: false,
  selectedCategoryId: null,
  itemDetail: {},
  selectCategory: {}
})

export const getters = {
  items: state => state.items,
  cartItemsSelected: state => state.cartItemsSelected,
  cartItemIdSelected: state => state.cartItemIdSelected,
  categorySelected: state => state.selectCategory,
  ticket: state => state.ticket,
  totalRankSelected: state => state.totalRankSelected,
  fullBoxError: state => state.fullBoxError,
  selectedCategoryId: state => state.selectedCategoryId,
  itemsFilter: (state) => {
    if (!state.selectedCategoryId) {
      return state.items
    }
    return state.items.filter((item) => {
      return item.category_id === state.selectedCategoryId
    })
  },
  itemDetail: state => state.itemDetail
}

export const mutations = {
  SELECT_ITEM (state, id) {
    const items = state.items.filter((it) => {
      return it.id.toString() === id.toString()
    })
    if (items[0]) {
      if (state.totalRankSelected + items[0].rank > state.ticket.max_rank) {
        state.fullBoxError = true
        return false
      }
      state.cartItemsSelected.push(items[0])
      state.totalRankSelected += items[0].rank
    }
  },
  REMOVE_ALL_ITEM (state) {
    state.cartItemsSelected = []
    state.totalRankSelected = 0
  },
  CHECKED_CART_ITEM (state, index) {
    if (!state.cartItemIdSelected.includes(index)) {
      state.cartItemIdSelected.push(index)
    }
  },
  UNCHECK_CART_ITEM (state, index) {
    if (state.cartItemIdSelected.includes(index)) {
      state.cartItemIdSelected.splice(state.cartItemIdSelected.indexOf(index), 1)
    }
  },
  REMOVE_CHECKED_CART_ITEM (state) {
    const arrayList = state.cartItemsSelected.filter((item, index) => {
      if (state.cartItemIdSelected.includes(index)) {
        state.totalRankSelected -= state.cartItemsSelected[index].rank
        return false
      }
      return item && !state.cartItemIdSelected.includes(index)
    })
    state.cartItemsSelected = arrayList
    state.cartItemIdSelected = []
  },
  CHANGE_FULL_BOX_ERROR (state, value) {
    state.fullBoxError = value
  },
  SELECT_CATEGORY_ID (state, id) {
    state.selectedCategoryId = id
  },
  SELECT_CATEGORY (state, category) {
    state.selectCategory = category
  },
  SELECT_ITEM_DETAIL (state, item) {
    state.itemDetail = item
  }
}

export const actions = {
  selectItem ({ commit }, id) {
    commit('SELECT_ITEM', id)
  },
  removeAllItem ({ commit }) {
    commit('REMOVE_ALL_ITEM')
  },
  checkedCartItem ({ commit }, index) {
    commit('CHECKED_CART_ITEM', index)
  },
  removeCheckedCartItem ({ commit }) {
    commit('REMOVE_CHECKED_CART_ITEM')
  },
  changeFullBoxError ({ commit }, value) {
    commit('CHANGE_FULL_BOX_ERROR', value)
  },
  selectCategoryId ({ commit }, id) {
    commit('SELECT_CATEGORY_ID', id)
  },
  selectCategory ({ commit }, category) {
    commit('SELECT_CATEGORY', category)
  },
  selectItemDetail ({ commit }, item) {
    commit('SELECT_ITEM_DETAIL', item)
  },
  unCheckedCartItem ({ commit }, index) {
    commit('UNCHECK_CART_ITEM', index)
  }
}
