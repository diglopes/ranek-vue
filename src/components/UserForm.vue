<template>
  <form>
    <label for="name">Nome</label>
    <input id="name" type="text" v-model="name">

    <label for="email">Nome</label>
    <input id="email" type="email" v-model="email">

    <label for="password">Senha</label>
    <input id="password" type="password" v-model="password">

    <label for="cep">Cep</label>
    <input id="cep" type="text" v-model="Cep">

    <label for="state">Estado</label>
    <input id="state" type="text" v-model="state">

    <label for="city">Cidade</label>
    <input id="city" type="text" v-model="city">

    <label for="neighborhood">Bairro</label>
    <input id="neighborhood" type="text" v-model="neighborhood">

    <label for="street">Rua</label>
    <input id="street" type="text" v-model="street">

    <label for="number">Número</label>
    <input id="number" type="text" v-model="number">

    <div class="action-btn">
      <slot />
    </div>
  </form>
</template>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.action-btn {
  grid-column: 2;
  margin-top: 10px;
}

.action-btn > * {
  max-width: 100%;
}
</style>
