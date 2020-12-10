import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dataset',
    name: 'Dataset',
    component: () => import('../views/Dataset.vue')
  },
  {
    path: '/try',
    name: 'Try',
    component: () => import('../views/Try.vue')
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: () => import('../views/Leaderboard.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
