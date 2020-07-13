import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store/index.ts';
Vue.use(Router);
const nolRoutes: any = [
  {
    path: 'index',
    name: 'Dashboard - 1',
    meta: {
      name: '工作台',
      icon: 'el-icon-s-help',
    },
    component: () => import('../views/main/Index.vue'),
  },
  {
    path: 'user',
    name: '用户管理 - 2',
    meta: {
      name: '用户列表',
      icon: 'el-icon-s-custom',
    },
    component: () => import('../views/main/User.vue'),
  },
  {
    path: 'list',
    name: '文章管理 - 3',
    meta: {
      name: '文章列表',
      icon: 'el-icon-s-order',
    },
    component: () => import('../views/main/article/ArticleList.vue'),
  },
  {
    path: 'create',
    name: '文章管理 - 3',
    meta: {
      name: '创作文章',
      icon: 'el-icon-s-order',
    },
    component: () => import('../views/main/article/ArticleCreate.vue'),
  },
  {
    path: 'tag',
    name: '标签管理 - 4',
    meta: {
      name: '标签列表',
      icon: 'el-icon-s-opportunity',
    },
    component: () => import('../views/main/tag/TagList.vue'),
  },
  {
    path: 'category',
    name: '分类管理 - 5',
    meta: {
      name: '标签列表',
      icon: 'el-icon-s-operation',
    },
    component: () => import('../views/main/category/CategoryList.vue'),
  },
];
export default new Router({
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
      children: nolRoutes,
    },
  ],
});
