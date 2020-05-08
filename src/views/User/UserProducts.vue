<template >
  <section>
    <h2>Adicionar produtos</h2>

    <AddProduct />

    <h2>Seus produtos</h2>

    <transition-group v-if="userProducts.length" name="list" tag="ul">
      <li v-for="product in userProducts" :key="product.id">
        <ProductItem :product="product">
          <p>{{product.descricao}}</p>
          <button class="delete" @click="deleteProduct(product.id)">Deletar</button>
        </ProductItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue';
import ProductItem from '@/components/ProductItem.vue';
import { removeProductById } from '@/services/products';
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
    deleteProduct(id) {
      // eslint-disable-next-line
      const confirm = window.confirm('Deseja remover este produto?');
      if (confirm) {
        removeProductById(id)
          .then(() => this.getUserProducts())
          .catch((err) => console.log(err.response));
      }
    },
  },
};
</script>


<style scoped>
h2 {
  margin-bottom: 20px;
}

.delete {
  position: absolute;
  top: 0;
  right: 0;
  background: url("../../assets/remove.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  text-indent: 1000px;
  overflow: hidden;
  cursor: pointer;
  border: none;
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
