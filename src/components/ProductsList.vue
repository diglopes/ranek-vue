<template>
  <section class="products-container">
    <transition mode="out-in">
      <ul v-if="products && products.length" class="products">
        <li class="product" v-for="(product, index) in products" :key="index">
          <router-link :to="{name: 'Product', params: {id: product.id}}">
            <img v-if="product.fotos && product.fotos.length"
              :src="product.image[0].src"
              :alt="product.image[0].alt"
            >
            <p class="price">{{product.preco | currencyConvert}}</p>
            <h2 class="title">{{product.nome}}</h2>
            <p>{{product.descricao}}</p>
          </router-link>
        </li>
        <AppPagination :totalCount="totalCount" :pageProductsLimit="pageProductsLimit"/>
      </ul>
      <div class="no-results" v-else-if="products && !products.length">
        <p>Busca sem resultados, tente outro termo</p>
      </div>
      <AppLoading v-else/>
    </transition>
  </section>
</template>


<script>
import { getProducts } from '@/services/products';
import { serializeQuery } from '@/helpers';
import AppPagination from '@/components/AppPagination.vue';

export default {
  created() {
    this.fetchProducts();
  },
  data: () => ({
    products: null,
    totalCount: 0,
  }),
  components: {
    AppPagination,
  },
  computed: {
    query() {
      return this.$route.query;
    },
    pageProductsLimit() {
      // eslint-disable-next-line
      return Number(this.$route.query._limit)
    },
  },
  watch: {
    query() {
      this.fetchProducts();
    },
  },
  methods: {
    fetchProducts() {
      this.products = null;
      const query = serializeQuery(this.query);
      getProducts({ query }).then(({ data, headers }) => {
        this.totalCount = Number(headers['x-total-count']);
        this.products = data;
      });
    },
  },
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
  margin: 30px 0;
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
