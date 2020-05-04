import Vue from 'vue';
import VueRouter from 'vue-router';
import Product from '@/views/Product.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import User from '@/views/User/index.vue';
import UserProducts from '@/views/User/UserProducts.vue';
import UserEdit from '@/views/User/UserEdit.vue';
import UserSales from '@/views/User/UserSales.vue';
import UserPurchases from '@/views/User/UserPurchases.vue';

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
    component: User,
    children: [
      {
        path: '',
        name: 'User',
        component: UserProducts,
      },
      {
        path: 'editar',
        name: 'UserEdit',
        component: UserEdit,
      },
      {
        path: 'vendas',
        name: 'UserSales',
        component: UserSales,
      },
      {
        path: 'compras',
        name: 'UserPurchases',
        component: UserPurchases,
      },
    ],
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
