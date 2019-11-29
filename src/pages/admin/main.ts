import Vue from '@/modules/initVue';
import App from './App.vue';
import router from './router';
import store from '@/store/index.ts';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
Vue.config.productionTip = false;
// 简单配置
NProgress.inc(0.2);
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
