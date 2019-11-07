import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/admin/',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/Login.vue'),
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('../views/main/Main.vue'),
      redirect: '/main/index',
      children: [
        {
          path: 'index',
          name: 'Index',
          component: () => import('../views/main/Index.vue'),
        },
      ],
    },
  ],
});
