<template>
  <header>
    <nav>
      <router-link class="logo" to="/">
        <img alt="Ranek" src="@/assets/ranek.svg">
      </router-link>
      <router-link class="btn" v-if="isLogged" to="/usuario">{{name}}</router-link>
      <router-link v-else class="btn" to="/login">Vender / Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.user.nome.replace(/ .*/, '');
    },
    isLogged() {
      return this.$store.state.isLogged;
    },
  },
};
</script>


<style scoped>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  }

  .logo {
    padding: 10px 0;
  }

  .logo img {
    width: 90px;
  }
</style>
