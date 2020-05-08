<template>
  <div class="product-item" v-if="product">
    <router-link class="product-img" :to="{name: 'Product', params: {id: product.id}}">
      <img
        v-if="product.fotos && product.fotos.length"
        :src="product.fotos[0].src"
        :alt="product.fotos[0].alt"
      >
      <span>Ver Produto</span>
    </router-link>
    <div class="info">
      <p class="price">{{product.preco | currencyConvert}}</p>
      <h2 class="title">{{product.nome}}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true },
  },
};
</script>


<style scoped>
.product-item {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 40px;
  position: relative;
}

.info {
  align-self: end;

}

.product-img {
  border-radius: 4px;
  overflow: hidden;
  max-height: 100px;
}
</style>
