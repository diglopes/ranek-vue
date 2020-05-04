import Vue from 'vue';
import Vuex from 'vuex';
import { getUser, createUser } from '@/services/userService';
import { v4 as uuidv4 } from 'uuid';

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
    logout(context) {
      context.commit('UPDATE_USER', {
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
      });
      context.commit('UPDATE_LOGIN', false);
    },
    createNewUser({ commit }, payload) {
      return createUser(payload).then(() => {
        commit('UPDATE_USER', { id: uuidv4() });
      });
    },
  },

  modules: {
  },
});
