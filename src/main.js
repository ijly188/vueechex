// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import VeeValidate from 'vee-validate';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';

import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';

Vue.use(VueAxios, axios);

// 全域啟動Loading Component
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);

Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh-TW', zhTWValidate);

axios.defaults.withCredentials = true;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

// middleware
router.beforeEach((to, from, next) => {
  // console.log('to:', to, 'from:', from, 'next:', next);
  if (to.meta.requiresAuth) {
    const api = `${process.env.API_DOMAINNAME}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
