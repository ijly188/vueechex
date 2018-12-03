import Vue from 'vue';
import Router from 'vue-router';
// front stage
import Indexwrap from '@/components/frontstage/Indexwrap';
import IndexContent from '@/components/frontstage/IndexContent';
import Category from '@/components/frontstage/Category';
import Product from '@/components/frontstage/Product';
// back stage
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Orders from '@/components/pages/Orders';
import Coupons from '@/components/pages/Coupons';
import CustomerOrder from '@/components/pages/CustomerOrder';
import Checkout from '@/components/Checkout';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      // name: 'FrontStage',
      component: Indexwrap,
      children: [
        {
          path: '',
          name: 'FrontStageContent',
          component: IndexContent,
        },
        {
          path: 'category/:id',
          name: 'FrontStageCategory',
          component: Category,
        },
        {
          path: 'product/:id',
          name: 'FrontStageProduct',
          component: Product,
        },
      ],
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true },
        },
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
        },
        {
          path: 'checkout/:order_id',
          name: 'Checkout',
          component: Checkout,
        },
      ],
    },
    // {
    //   path: '/',
    //   name: 'DashboardWithoutConfirm',
    //   component: Dashboard,
    //   meta: { requiresAuth: true },
    //   children: [
    //     {
    //       path: 'customer_order',
    //       name: 'CustomerOrder',
    //       component: CustomerOrder,
    //     },
    //     {
    //       path: 'checkout/:order_id',
    //       name: 'Checkout',
    //       component: Checkout,
    //     },
    //   ],
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
