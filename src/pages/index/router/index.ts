import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  base: '/index/',
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('../views/Index.vue'),
    },
    {
      path: '/actice',
      name: 'Actice',
      component: () => import('../views/Actice.vue'),
    },
    {
      path: '/project',
      name: 'Project',
      component: () => import('../views/Project.vue'),
    },
    {
      path: '/archive',
      name: 'Archive',
      component: () => import('../views/Archive.vue'),
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: () => import('../views/Timeline.vue'),
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import('../views/Message.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue'),
    },
  ],
});
