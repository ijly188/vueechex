// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';

import App from './App';
import router from './router';
import './bus';

Vue.use(VueAxios, axios);

// 全域啟動Loading Component
Vue.component('Loading', Loading);

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
