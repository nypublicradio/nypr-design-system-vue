import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/404.vue'
import Home from '../views/Home.vue'
import Kim from '../views/Kim.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'default' },
    component: Home
  },
  {
    path: '/kim',
    name: 'Kim',
    meta: { layout: 'default' },
    component: Kim
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
