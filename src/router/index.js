import Vue from 'vue';
import Router from 'vue-router';
import Cookie from 'js-cookie';

import Login from '@/components/login/Login';
import Signup from '@/components/signup/Signup';
import Index from '@/components/index/Index';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
    }
  ],
});

router.beforeEach((to, from, next) => {
  const isLogged = Cookie.get('isLogged');
  if (isLogged && isLogged === 'true') {
    (to.name === 'login' || to.name === 'signup') ? next('index') : next();
  } else {
    !(to.name === 'login' || to.name === 'signup') ? next('/') : next();
  }
});

export default router;
