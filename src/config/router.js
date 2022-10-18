import Vue from 'vue';
import Router from 'vue-router';

import Main from '@Views/structure/index';
import Index from '@Views/pages/main'
import Environment from '@/views/pages/environment/index';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'index',
          name: 'Index',
          component: Index
        },
        {
          path: 'environment/:code',
          name: 'Environment',
          component: Environment
        }
      ]
    }
  ]
});
export default router;
