import Vue from 'vue';
import Vuex from 'vuex';
import { getUser } from '@/services/userService';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLogged: false,
    user: {
      id: '',
      nome: '',
      email: '',
      senha: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.isLogged = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = { ...state.user, ...payload };
    },
  },
  actions: {
    login(context, payload) {
      return getUser(payload).then(({ data }) => {
        if (data.length) {
          context.commit('UPDATE_USER', data[0]);
          context.commit('UPDATE_LOGIN', true);
        }
      });
    },
  },
  modules: {
  },
});
