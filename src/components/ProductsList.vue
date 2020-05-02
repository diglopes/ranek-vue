<template>
  <section class="products-container">
    <ul v-if="products && products.length" class="products">
      <li class="product" v-for="product in products" :key="product.id">
        <router-link to="/">
          <img v-if="product.fotos.length"
            :src="product.image[0].src"
            :alt="product.image[0].alt"
          >
          <p class="price">{{product.preco}}</p>
          <h2 class="title">{{product.nome}}</h2>
          <p>{{product.descricao}}</p>
        </router-link>
      </li>
    </ul>
    <div class="no-results" v-else-if="products && !products.length">
      <p>Busca sem resultados, tente outro termo</p>
    </div>
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

<style scoped>
.products-container {
  max-width: 1000px;
  margin: 0 auto;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.product {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 20px;
  background-color: white;
  border-radius: 4px;
  transition: all 0.2s;
}

.product:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.product img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.title {
  margin-bottom: 10px;
}

.price {
  color: var(--color-accent);
  font-weight: bold;
}

.no-results {
  text-align: center;
}
</style>
