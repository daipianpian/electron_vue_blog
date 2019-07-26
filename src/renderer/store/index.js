import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

const state = {
  clientWidth: document.documentElement.clientWidth || document.body.clientWidth,
  clientHeight: document.documentElement.clientHeight || document.body.clientHeight,
  menu: [
    {
      url: '/',
      name: '首页'
    }
  ],
  searchKeywords: null,
  articlePageNum: 1, // 请求第几页
  articlePageSize: 10, // 每页请求多少条
  articlePageTotal: 0, // 总共多少条数据
  articleCurPage: 1, // 初始时在第几页
  keywords: null,
  articleList: []
}

export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState(),
    // createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production',
  state,
  actions,
  mutations
})
