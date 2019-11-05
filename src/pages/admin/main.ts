import Vue from '@/modules/initVue';
import App from './App.vue';
import router from './router';
import store from '@/store/index.ts';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
