<template>
  <div class="loading">
    <span v-for="item in 4" :key="item"></span>
  </div>
</template>

<style scoped>
.loading {
  text-align: center;
}

.loading span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: var(--color-primary);
  margin: 4px;
  animation: dots 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
}

.loading span:nth-child(2) {
  animation-delay: 0.1s;
}

.loading span:nth-child(3) {
  animation-delay: 0.2s;
}

.loading span:nth-child(4) {
  animation-delay: 0.3s;
}

@keyframes dots {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 0.3;
  }

  to {
    transform: translate3d(0, 30px, 0);
    opacity: 1;
  }
}
</style>
