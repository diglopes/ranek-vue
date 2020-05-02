import Vue from 'vue';
import VueRouter from 'vue-router';
import Product from '@/views/Product.vue';
import Home from '@/views/Home.vue';


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
