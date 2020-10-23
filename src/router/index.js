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
import Register from '../views/Register'
import Login from '../views/Login'

import NotFound from '../views/NotFound'
Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD

    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    }, {
        path: '/register',
        component: Register
    },
    {
        path: '/paysuccess',
        component: PaySuccess
    },
    {
        path: '/orderDetails/:oid',
        component: OrderDetails,
        props: true
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
        component: Details
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/*',
        component: NotFound
    }

    // {
    //   path: '/search',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
    // }
=======
  
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
>>>>>>> f41c783f6520dac7f72bdcb8c0487c6d874a942c
]

const router = new VueRouter({
    routes
})

export default router