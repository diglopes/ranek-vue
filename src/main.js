import Vue from 'vue';
import AppLoading from '@/components/AppLoading.vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.component('AppLoading', AppLoading);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
