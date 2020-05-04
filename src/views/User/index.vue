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
