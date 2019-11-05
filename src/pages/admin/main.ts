import Vue from '@/modules/initVue';
import App from './App.vue';
import router from './router';
import store from '@/store/index.ts';
console.log(store);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
