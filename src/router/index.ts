import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home,
    children: [
      { path: '', component: () => import('../views/home/Home.vue') },
      { path: 'about', name: 'about', component: () => import('../views/home/About.vue') },
      { path: 'center', name: '我的', component: () => import('../views/home/Center.vue') }
    ]
  },
  {
    path: '/others',
    name: 'others',
    component: () => import('../views/home/Others.vue'),
    children: [
      { path: 'agency', name: '顾问机构',component: () => import('../views/agency/index.vue') },
      { path: 'teachers', name: '顾问详情', component: () => import('../views/agency/teachers.vue') }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from) => {
  store.dispatch('changeRouterAsync', to)
})

export default router
