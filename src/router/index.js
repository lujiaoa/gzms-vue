import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index.vue'
import Search from '../views/Search.vue'
import Details from '../views/Details.vue'
import Paypage from '../views/Paypage'

import OrderList from '../views/OrderList'
import OrderDetails from '../views/OrderDetails'
import CheckInPerson from '../views/CheckInPerson'
import PaySuccess from '../views/PaySuccess'
import Me from '../views/Me'
import NotFound from '../views/NotFound'
Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    component:Home
  },
  {
    path: '/paysuccess',
    component: PaySuccess
  },
  {
    path: '/orderDetails/:oid',
    component: OrderDetails,
    props:true
  },
  {
    path: '/orderList',
    component: OrderList
  },
  {
    path: '/me',
    component: Me
  },
  {
    path: '/checkinperson',
    component: CheckInPerson
  },
  {
    path: `/paypage/:id`,
    component: Paypage
  },
  {
    path: '/details',
    component: Details
  },
  {
    path: '/search',
    component: Search
  },
  {
    path:'/*',
    component:NotFound
  }
  
  // {
  //   path: '/search',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
