import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index.vue'
import Search from '../views/Search.vue'
import Details from '../views/Details.vue'
import Paypage from '../views/Paypage'
<<<<<<< HEAD

=======
import OrderList from '../views/OrderList'
import OrderDetails from '../views/OrderDetails'
import CheckInPerson from '../views/CheckInPerson'
import PaySuccess from '../views/PaySuccess'
import Me from '../views/Me'
>>>>>>> 6c0a2110b7c98fb7083a00ee6b330581fd7816a3
Vue.use(VueRouter)

const routes = [
  
  {
<<<<<<< HEAD
    path: '/details/:id',
=======
    path: '/',
    component:Home
  },
  {
    path: '/paysuccess',
    component: PaySuccess
  },
  {
    path: '/orderDetails',
    component: OrderDetails
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
    path: '/paypage',
    component: Paypage
  },
  {
    path: '/details',
>>>>>>> 6c0a2110b7c98fb7083a00ee6b330581fd7816a3
    component: Details
  },
  {
    path: '/search',
    component: Search
  },
  
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
