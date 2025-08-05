
import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Join from './pages/Join.vue'
import My from './pages/My.vue'
import Withdraw from './pages/Withdraw.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/join', component: Join },
    { path: '/my', component: My },
    { path: '/withdraw', component: Withdraw }
  ]
})
