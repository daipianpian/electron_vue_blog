import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import App from './App'
import router from './router'
import {fetch, baseURL} from './config/fetch.js'
import global from './assets/js/global.js'
import store from './store'
import 'babel-polyfill'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false


Vue.use(ElementUI)

const bus = new Vue()
window.bus = bus
window.bs=global
window.fetch=fetch
window.baseURL = baseURL
window.router = router

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
