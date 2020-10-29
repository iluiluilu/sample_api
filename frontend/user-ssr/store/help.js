export const state = {
  isHelpScreen: false,
  step: 0
}

export const getters = {
  isHelpScreen: state => state.isHelpScreen,
  step: state => state.step
}

export const mutations = {
  changeStep (state, step) {
    if (step <= 4) {
      state.step = step
    }
  },
  changeStatusHelp (state, status) {
    state.isHelpScreen = status
  }
}

export const actions = {
  changeStep ({ commit }, step) {
    commit('changeStep', step)
  },
  changeStatusHelp ({ commit }, status) {
    commit('changeStatusHelp', status)
  }
}
