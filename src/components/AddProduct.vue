<template>
  <form class="add-product" @submit.prevent="AddNewProduct">
    <label for="name">Nome</label>
    <input type="text" name="nome" id="name" v-model="product.nome">

    <label for="price">Preço (R$)</label>
    <input type="number" name="price" id="preco" v-model="product.preco">

    <label for="photos">Fotos</label>
    <input type="file" name="fotos" id="photos" ref="photos">

    <label for="description">Descrição</label>
    <textarea name="fotos" id="description" v-model="product.descricao"></textarea>

    <input class="btn" type="submit" value="Adicionar Produto">
  </form>
</template>

<script>
import { createProduct } from '@/services/products';

export default {
  data: () => ({
    product: {
      nome: '',
      preco: 0,
      descricao: '',
      vendido: false,
    },
  }),
  computed: {
    userId() {
      return this.$store.state.user.id;
    },
  },
  methods: {
    AddNewProduct() {
      const payload = { ...this.product, usuario_id: this.userId };
      createProduct(payload).then(() => {
        this.$store.dispatch('getUserProducts');
      });
    },
  },
};
</script>

<style scoped>
.add-product {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
  justify-self: left;
  margin-top: 30px;
}
</style>
