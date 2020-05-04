<template>
<section>
  <h2>Crie a sua conta</h2>
  <transition mode="out-in">
    <button
      class="btn"
      @click="isFormActive = true"
      v-if="!isFormActive">
        Criar conta
    </button>
    <UserForm v-else :submitMethod="handleSubmit">
      <input type="submit" value="Criar usuário" class="btn"/>
    </UserForm>
  </transition>
</section>
</template>


<script>
import UserForm from '@/components/UserForm.vue';

export default {
  data: () => ({
    isFormActive: false,
  }),
  components: {
    UserForm,
  },
  methods: {
    async handleSubmit() {
      try {
        const { email, senha } = this.$store.state.user;
        await this.$store.dispatch('createNewUser', this.$store.state.user);
        await this.$store.dispatch('login', { email, senha });
        this.$router.push({ name: 'User' });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

</style>
