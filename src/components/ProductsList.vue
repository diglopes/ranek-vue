<template>
  <section>
    <ul v-if="products">
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
import { serializeQuery } from '@/helpers';

export default {
  created() {
    this.fetchProducts();
  },
  computed: {
    query() {
      return this.$route.query;
    },
  },
  watch: {
    query() {
      this.fetchProducts();
    },
  },
  methods: {
    fetchProducts() {
      const query = serializeQuery(this.query);
      getProducts({ query }).then(({ data }) => {
        this.products = data;
      });
    },
  },
  data: () => ({
    products: null,
  }),
};
</script>
