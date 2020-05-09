<template>
  <section>
    <div v-if="sales">
      <h2>Vendas</h2>

      <div class="product-wrapper" v-for="sale in sales" :key="sale.id">
        <ProductItem v-if="sale.produto" :product="sale.produto">
          <p class="buyer">
            <span>Comprador:</span>
            {{sale.comprador_id}}
          </p>
        </ProductItem>
        <div class="delivery">
          <h3>Entrega:</h3>
          <ul v-if="sale.endereco">
            <li v-for="(value, key) in sale.endereco" :key="key">
             <span>{{key}}</span>: {{value}}
            </li>
          </ul>
        </div>
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
    sales: null,
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
      getTransaction(this.user.id).then(({ data }) => { this.sales = data; });
    },
  },
};
</script>

<style scoped>
.product-wrapper {
  margin-bottom: 40px;
}

.buyer span {
  color: var(--color-accent);
}

h2 {
  margin-bottom: 20px;
}

h3 {
  justify-self: end;
  margin: 0;
}

.delivery {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;
}

.delivery span {
  text-transform: capitalize;
}

@media screen and (max-width: 600px) {
  h3 {
    justify-self: start;
  }

  .delivery {
    grid-template-columns: 1fr;
  }
}
</style>
