import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Details from '../views/Details.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/details',
    component: Details
  },
  {
    path: '/search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
