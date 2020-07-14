import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'
import Login from '../pages/login.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/product/:id',
        name: 'product',
        component: ()=>import('../pages/product.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: ()=>import('../pages/detail.vue')
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    component: ()=>import('../pages/order'),
    children:[
      {
        path: 'list',
        name: 'list',
        component: ()=>import('../pages/orderList')
      },
      {
        path: 'confirm',
        name: 'orderConfirm',
        component: ()=>import('../pages/orderConfirm')
      },
      {
        path: 'pay',
        name: 'orderPay',
        component: ()=>import('../pages/orderPay')
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: ()=>import('../pages/alipay')
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: ()=>import('../pages/cart')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  
]

const router = new VueRouter({
  routes
})

export default router
