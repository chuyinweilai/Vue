import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 定义状态
  state: {
    router: {
      name: '测试'
    },
    count: 0
  },
  // 同步更改状态
  mutations: {
    changeRouter(state, router){
      state.router = router
    },
    increment(state){
      state.count++
    }
  },
  // 异步更改状态
  actions: {
    changeRouterAsync({commit}, router){
      commit('changeRouter', router)
    }
  },
  modules: {
  }
})
