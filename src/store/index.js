import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:'',
    cartCount:0
  },
  mutations: {
    saveUsername(state,username){
      state.username = username
    },
    saveCartCount(state,count){
      state.cartCount = count
    }
  },
  actions: {
    saveUsername(context, username){
      context.commit('saveUsername',username)
    },
    saveCartCount(context,count){
      context.commit('saveCartCount',count)
    }
  },
  modules: {
  }
})
