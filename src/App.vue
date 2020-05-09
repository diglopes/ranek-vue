<template>
  <div id="app">
    <AppHeader />
    <main>
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';


export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>

:root {
  --color-primary: #87f;
  --color-text: #345;
  --color-accent: #e80;

  --ff: "Avenir", Helvetica, Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

body, ul, li, h1, h2, p {
  padding: 0;
  margin: 0;
}

ul {list-style: none;}

body {
  font-family: var(--ff);
  color: var(--color-text);
  background: url('./assets/pattern.svg') repeat top;
}

a {
  color: var(--color-text);
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

label {
  margin-bottom: 5px;
}

input, textarea {
  border-radius: 4px;
  border: none;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all .3s;
  border: 1px solid white;
  font-size: 1rem;
  font-family: var(--ff);
  margin-bottom: 15px;
  width: 100%;
}

input:hover,
textarea:hover,
input:focus,
textarea:focus {
  border-color: var(--color-primary);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.btn {
  display: block;
  padding: 10px 30px;
  background-color: var(--color-primary);
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: var(--ff);
  cursor: pointer;
}

.btn:hover {
  background-color: var(--color-primary);
  transform: scale(1.1);
}

.v-leave-to,
.v-enter {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

</style>
