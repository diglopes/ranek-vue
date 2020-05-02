<template>
  <section class="login">
    <form @submit.prevent="login">
      <h1>Login</h1>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="login.email">

      <label for="senha">Senha</label>
      <input type="password" id="senha" v-model="login.senha">

      <input class="btn" type="submit" value="Logar">
    </form>
    <p class="reset-pass">
      <a href="/" target="_blank">Perdeu a senha? Clique aqui.</a>
    </p>

    <CreateAccount />
  </section>
</template>


<script>
import CreateAccount from '@/components/CreateAccount.vue';

export default {
  data: () => ({
    login: {
      email: '',
      senha: '',
    },
  }),
  components: {
    CreateAccount,
  },
  methods: {
    login() {
      console.log('login');
    },
  },
};
</script>


<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

form {
  display: grid;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 80px;
  color: var(--color-primary);
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.reset-pass {
  text-align: center;
  margin-top: 20px;
}

.reset-pass a:hover{
  color: var(--color-primary);
  text-decoration: underline;
}
</style>
