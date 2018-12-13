import Vue from 'vue';
import Router from 'vue-router';
// front stage
import Indexwrap from '@/components/frontstage/Indexwrap';
import IndexContent from '@/components/frontstage/IndexContent';
import Category from '@/components/frontstage/Category';
import Product from '@/components/frontstage/Product';
import Cart from '@/components/frontstage/Cart';
import About from '@/components/frontstage/About';

// back stage
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Orders from '@/components/pages/Orders';
import Coupons from '@/components/pages/Coupons';
import CustomerOrder from '@/components/pages/CustomerOrder';
import Checkout from '@/components/Checkout';
import Dashboard from '@/components/Dashboard';

// custom backstage
import CustomBackstageLogin from '@/components/backstage/pages/Login';
import CustomBackstageRegister from '@/components/backstage/pages/Register';
import CustomBackstageError from '@/components/backstage/pages/Error';
import CustomBackstageForgetPassword from '@/components/backstage/pages/Forgetpassword';
import CustomBackstageUser from '@/components/backstage/pages/User';
import CustomBackstageSettings from '@/components/backstage/pages/Settings';
import CustomBackstageIndexWrap from '@/components/backstage/Indexwrap';
import CustomBackstageDashboard from '@/components/backstage/pages/Dashboard';
import CustomBackstageProduct from '@/components/backstage/pages/Product';
import CustomBackstageOrders from '@/components/backstage/pages/Orders';
import CustomBackstageCheckout from '@/components/backstage/pages/Checkout';
import CustomBackstageCoupons from '@/components/backstage/pages/Coupons';
import CustomBackstageCartWrap from '@/components/backstage/pages/CartWrap';

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
          path: 'category/:category',
          name: 'FrontStageCategory',
          component: Category,
        },
        {
          path: 'product/:id',
          name: 'FrontStageProduct',
          component: Product,
        },
        {
          path: 'cart',
          name: 'FrontStageCart',
          component: Cart,
        },
        {
          path: 'about',
          name: 'FrontStageAbout',
          component: About,
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
    {
      path: '/backstage',
      name: 'CustomBackstageIndexWrap',
      component: CustomBackstageIndexWrap,
      children: [
        {
          path: '/',
          name: 'CustomBackstageDashboard',
          component: CustomBackstageDashboard,
          meta: { requiresAuth: true },
        },
        {
          path: 'user',
          name: 'CustomBackstageUser',
          component: CustomBackstageUser,
          meta: { requiresAuth: true },
        },
        {
          path: 'settings',
          name: 'CustomBackstageSettings',
          component: CustomBackstageSettings,
          meta: { requiresAuth: true },
        },
        {
          path: 'product',
          name: 'CustomBackstageProduct',
          component: CustomBackstageProduct,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'CustomBackstageOrders',
          component: CustomBackstageOrders,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'CustomBackstageCoupons',
          component: CustomBackstageCoupons,
          meta: { requiresAuth: true },
        },
        {
          path: 'cart',
          name: 'CustomBackstageCart',
          component: CustomBackstageCartWrap,
          meta: { requiresAuth: true },
        },
        {
          path: 'checkout/:order_id',
          name: 'CustomBackstageCheckout',
          component: CustomBackstageCheckout,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/customerror',
      name: 'CustomBackstageError',
      component: CustomBackstageError,
    },
    {
      path: '/customlogin',
      name: 'CustomBackstageLogin',
      component: CustomBackstageLogin,
    },
    {
      path: '/customregister',
      name: 'CustomBackstageRegister',
      component: CustomBackstageRegister,
    },
    {
      path: '/customforgetpassword',
      name: 'CustomBackstageForgetPassword',
      component: CustomBackstageForgetPassword,
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
