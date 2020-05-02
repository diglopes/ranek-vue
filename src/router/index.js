import Vue from 'vue';
import VueRouter from 'vue-router';
import Product from '@/views/Product.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import User from '@/views/User/index.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/produto/:id',
    name: 'Product',
    component: Product,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/usuario',
    name: 'User',
    component: User,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});

export default router;
