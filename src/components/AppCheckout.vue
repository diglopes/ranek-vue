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
    async createAccount() {
      try {
        const { email, senha } = this.$store.state.user;
        await this.$store.dispatch('createNewUser', this.$store.state.user);
        await this.$store.dispatch('login', { email, senha });
        await this.createNewTransaction();
      } catch (error) {
        console.error(error);
      }
    },
    handlePurchase() {
      if (this.user.isLogged) {
        this.createNewTransaction();
      } else {
        this.createAccount();
      }
    },
  },
};
</script>


<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}

.btn {
  background-color: var(--color-accent);
}
</style>
