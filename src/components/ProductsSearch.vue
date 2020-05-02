<template>
  <form @submit.prevent="searchProducts">
    <input type="text" name="search" id="search" v-model="searchTerm">
    <input type="submit" value="Buscar">
  </form>
</template>

<script>
export default {
  data: () => ({
    searchTerm: '',
    pageProductsLimit: 9,
  }),
  methods: {
    searchProducts() {
      this.$router.push({ query: { q: this.searchTerm, _limit: this.pageProductsLimit } });
    },
  },
};
</script>
