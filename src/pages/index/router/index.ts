import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'home',
      component: () => import('../views/Index.vue'),
    },
    {
      path: '/actice',
      name: 'actice',
      component: () => import('../views/Actice.vue'),
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/Project.vue'),
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('../views/Archive.vue'),
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () => import('../views/Timeline.vue'),
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/Message.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
  ],
});
