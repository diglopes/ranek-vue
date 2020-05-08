<template >
  <section>
    <h2>Adicionar produtos</h2>

    <AddProduct />

    <h2>Seus produtos</h2>

    <transition-group v-if="userProducts.length" name="list" tag="ul">
      <li v-for="product in userProducts" :key="product.id">
        <ProductItem :product="product">
          <p>{{product.descricao}}</p>
        </ProductItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue';
import ProductItem from '@/components/ProductItem.vue';
import { mapState, mapActions } from 'vuex';

export default {
  created() {
    if (this.isLogged) {
      this.getUserProducts();
    }
  },
  watch: {
    isLogged(val) {
      if (val) this.getUserProducts();
    },
  },
  components: {
    AddProduct,
    ProductItem,
  },
  computed: {
    ...mapState(['isLogged', 'user', 'userProducts']),
  },
  methods: {
    ...mapActions(['getUserProducts']),
  },
};
</script>


<style scoped>
h2 {
  margin-bottom: 20px;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active  {
  transition: all 0.3s;
}
</style>
