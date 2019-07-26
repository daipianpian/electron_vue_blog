import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('@/pages/Home').default,
      children: [
          // 刷新中转页面
        { path: '/refresh', name: 'refresh', component: require('@/pages/refresh').default},
        { path: '/', name: 'Main', component: require('@/pages/Main').default },
        { path: '/article', name: 'article', component: require('@/pages/Article').default}
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
