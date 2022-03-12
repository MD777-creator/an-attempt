export default {
  namespaced: true,
  state: () => ({
    address: JSON.parse(uni.getStorageSync('address') || '{}'),
    token: uni.getStorageSync('token') || '',
    userinfo: JSON.parse(uni.getStorageSync('userinfo') || "{}"),
    redirectInfo: null
  }),
  mutations: {
    updateAddress(state, address) {
      state.address = address
      this.commit('m_user/saveAddressToStorage')
    },
    updateUserInfo(state, userinfo) {
      state.userinfo = userinfo
      this.commit('m_user/saveUserInfo')
    },
    updateToken(state, payload) {
      state.token = payload
      this.commit('m_user/saveToken')
    },
    updateRedirectInfo(state, info) {
      state.redirectInfo = info
    },
    saveUserInfo(state) {
      uni.setStorageSync("userinfo", JSON.stringify(state.userinfo))
    },
    saveAddressToStorage(state) {
      uni.setStorageSync("address", JSON.stringify(state.address))
    },
    saveToken(state) {
      uni.setStorageSync("token", JSON.stringify(state.token))
    }
  },
  getters: {
    addstr(state) {
      if (!state.address.provinceName) return ''
      return state.address.provinceName + state.address.cityName + state.address.countyName + state.address.detailInfo
    }
  }
}
