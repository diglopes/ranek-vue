<template>
  <section class="user">
    <nav class="side-nav">
      <ul>
        <li>
          <router-link :to="{name: 'User'}">Produtos</router-link>
        </li>
        <li>
          <router-link :to="{name: 'UserPurchases'}">Compras</router-link>
        </li>
        <li>
          <router-link :to="{name: 'UserSales'}">Vendas</router-link>
        </li>
        <li>
          <router-link :to="{name: 'UserEdit'}">Editar usuário</router-link>
        </li>
        <li>
          <button @click="handleLogout">Deslogar</button>
        </li>
      </ul>
    </nav>

    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      this.$store.dispatch('logout');
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style scoped>
.user {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}

@media screen and (max-width: 500px){
  .user {
    grid-template-columns:  1fr;
    margin: 0 auto;
  }
}

.side-nav a,
.side-nav button {
  display: block;
  padding: 10px;
  background-color: #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
}

.side-nav a.router-link-exact-active,
.side-nav a:hover,
.side-nav button:hover {
  background-color: var(--color-primary);
  color: #fff;
}

.side-nav button {
  border: none;
  font-size: 1rem;
  width: 100%;
  text-align-last: left;
  font-family: var(--ff);
  cursor: pointer;
  color: var(--color-text);
}
</style>
