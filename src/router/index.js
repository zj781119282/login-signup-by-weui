import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login/Login';
import Signup from '@/components/signup/Signup';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
  ],
});
