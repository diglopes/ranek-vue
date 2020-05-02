<template>
  <section>
    <ul>
      <li v-for="product in products" :key="product.id">
        <img v-if="product.fotos.length"
          :src="product.image[0].src"
          :alt="product.image[0].alt"
        >
        <p class="price">{{product.preco}}</p>
        <h2>{{product.nome}}</h2>
        <p>{{product.descricao}}</p>
      </li>
    </ul>
  </section>
</template>


<script>
import { getProducts } from '@/services/products';

export default {
  created() {
    getProducts().then(({ data }) => {
      this.products = data;
    });
  },
  data: () => ({
    products: null,
  }),
};
</script>
