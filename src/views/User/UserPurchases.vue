<template>
  <section>
    <div v-if="purchases">
      <h2>Compras</h2>

      <div class="product-wrapper" v-for="purchase in purchases" :key="purchase.id">
        <ProductItem v-if="purchase.produto" :product="purchase.produto">
          <p class="vendor">
            <span>Vendedor:</span>
            {{purchase.vendedor_id}}
          </p>
        </ProductItem>
      </div>
    </div>
  </section>
</template>


<script>
import ProductItem from '@/components/ProductItem.vue';
import { getTransaction } from '@/services/transactionService';
import { mapState } from 'vuex';

export default {
  created() {
    if (this.isLogged) {
      this.fetchTransactions();
    }
  },
  data: () => ({
    purchases: null,
  }),
  computed: {
    ...mapState(['user', 'isLogged']),
  },
  watch: {
    isLogged() {
      this.fetchTransactions();
    },
  },
  components: {
    ProductItem,
  },
  methods: {
    fetchTransactions() {
      getTransaction(this.user.id).then(({ data }) => { this.purchases = data; });
    },
  },
};
</script>

<style scoped>
.product-wrapper {
  margin-bottom: 40px;
}

.vendor span {
  color: var(--color-accent);
}

h2 {
  margin-bottom: 20px;
}
</style>
