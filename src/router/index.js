import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import User from '../components/users/User';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/user/:login',
      name: 'User',
      component: User,
    },
  ],
  mode: 'history',
});
