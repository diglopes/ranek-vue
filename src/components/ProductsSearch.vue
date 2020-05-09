<template>
  <form @submit.prevent="searchProducts">
    <input
      type="text"
      name="search"
      id="search"
      v-model="searchTerm"
      placeholder="Buscar..."
    >
    <input id="search-button" type="submit" value="Buscar">
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

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
}

#search {
  width: 100%;
  padding: 20px;
  border: none;
}

#search:focus,
#search:hover {
  outline: none;
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
}

#search-button {
  width: 62px;
  height: 62px;
  display: block;
  background: url('../assets/search.svg') no-repeat center center;
  text-indent: -200px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: none;
}
</style>
