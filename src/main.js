import Vue from 'vue';
import AppLoading from '@/components/AppLoading.vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.component('AppLoading', AppLoading);
Vue.config.productionTip = false;

Vue.filter('currencyConvert', (value) => {
  if (!Number.isNaN(value)) {
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  return '';
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
