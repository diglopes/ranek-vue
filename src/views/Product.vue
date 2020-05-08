<template>
  <section>
    <div v-if="product" class="product">
      <ul class="photos" v-if="product.fotos && product.fotos.length">
        <li v-for="(photo, index) in product.fotos" :key="index">
          <img :src="photo.src" :alt="photo.alt">
        </li>
      </ul>
      <div class="info">
        <h1>{{product.nome}}</h1>
        <p class="price">{{product.preco | currencyConvert}}</p>
        <p class="description">{{product.descricao}}</p>
        <transition v-if="!product.vendido" mode="out-in">
          <button class="btn" v-if="!isCheckoutOpen" @click="isCheckoutOpen = true">Comprar</button>
          <AppCheckout v-else :product="product"/>
        </transition>
        <button class="btn" disabled v-else>Produto vendido</button>
      </div>
    </div>
    <AppLoading v-else/>
  </section>
</template>

<script>
import { getProductById } from '@/services/products';
import AppCheckout from '@/components/AppCheckout.vue';

export default {
  props: ['id'],
  created() {
    this.fetchProduct();
  },
  components: {
    AppCheckout,
  },
  data: () => ({
    product: null,
    isCheckoutOpen: false,
  }),
  methods: {
    fetchProduct() {
      getProductById(this.id).then(({ data }) => {
        this.product = data;
      });
    },
  },
};
</script>


<style scoped>
.product {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.price {
  color: var(--color-accent);
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.description {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
