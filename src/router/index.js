import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todolist',
    name: 'todolist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TodolistView.vue')
  },
  {
    path: '/todolistInfo',
    name: 'todolistInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodolistInfoView.vue')
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import(/* webpackChunkName: "about" */ '../views/CalculatorView.vue')
  },
  {
    path: '/calculatorInfo',
    name: 'calculatorInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/CalculatorInfoView.vue')
  },
  {
    path: '/axios',
    name: 'axios',
    component: () => import(/* webpackChunkName: "about" */ '../views/AxiosView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
