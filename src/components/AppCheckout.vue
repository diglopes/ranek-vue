<template>
  <section>
    <h2>Endereço de envio</h2>
    <UserForm>
      <button class="btn" @click.prevent="handlePurchase">Finalizar compra</button>
    </UserForm>
  </section>
</template>

<script>
import UserForm from '@/components/UserForm.vue';
import { createTransaction } from '@/services/transactionService';

export default {
  props: {
    product: { type: Object, required: true },
  },
  components: {
    UserForm,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    purchase() {
      const {
        id, cep, rua, numero, estado, bairro, cidade,
      } = this.user;
      return {
        comprador_id: id,
        vendedor_id: this.product.usuario_id,
        product: this.product,
        endereco: {
          cep,
          rua,
          numero,
          estado,
          bairro,
          cidade,
        },
      };
    },
  },
  methods: {
    createNewTransaction() {
      return createTransaction(this.purchase).then(() => {
        this.$router.push({ name: 'UserPurchases' });
      });
    },
    handlePurchase() {
      this.createNewTransaction();
    },
  },
};
</script>
