<template>
  <form>
    <label for="name">Nome</label>
    <input id="name" type="text" v-model="nome">

    <label for="email">Email</label>
    <input id="email" type="email" v-model="email">

    <label for="password">Senha</label>
    <input id="password" type="password" v-model="senha">

    <label for="cep">Cep</label>
    <input id="cep" type="text" v-model="cep">

    <label for="state">Estado</label>
    <input id="state" type="text" v-model="estado">

    <label for="city">Cidade</label>
    <input id="city" type="text" v-model="cidade">

    <label for="neighborhood">Bairro</label>
    <input id="neighborhood" type="text" v-model="bairro">

    <label for="street">Rua</label>
    <input id="street" type="text" v-model="rua">

    <label for="number">Número</label>
    <input id="number" type="text" v-model="numero">

    <div class="action-btn">
      <slot />
    </div>
  </form>
</template>

<script>
import { mapFields } from '@/helpers';
import cepService from '@/services/cepService';

export default {
  computed: {
    ...mapFields({
      fields: ['nome', 'email', 'senha', 'estado', 'cep', 'cidade', 'bairro', 'rua', 'numero'],
      mutation: 'UPDATE_USER',
      base: 'user',
    }),
  },
  watch: {
    cep(val) {
      this.fillAddressFields(val);
    },
  },
  methods: {
    fillAddressFields(cep) {
      const cepSanitized = cep.replace(/\D/g, '');
      if (cepSanitized.length === 8) {
        cepService(cepSanitized).then((data) => {
          Object.keys(data).forEach((key) => {
            this[key] = data[key];
          });
        });
      }
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.action-btn {
  grid-column: 2;
  margin-top: 10px;
}

.action-btn > * {
  max-width: 100%;
}
</style>
