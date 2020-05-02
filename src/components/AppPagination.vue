<template>
  <nav v-if="totalCount">
     <router-link class="page-jumper" :to="{query: query(1)}">
        Primeira
      </router-link>
    <ul>
      <li v-for="page in pagesRange" :key="page">
        <router-link :to="{query: query(page)}">
          {{page}}
        </router-link>
      </li>
    </ul>
    <router-link class="page-jumper" :to="{query: query(pages)}">
      última
    </router-link>
  </nav>
</template>

<script>
export default {
  computed: {
    pages() {
      const quantity = this.totalCount / this.pageProductsLimit;
      return quantity !== Infinity ? Math.ceil(quantity) : 0;
    },
    currentPage() {
      // eslint-disable-next-line
      return this.$route.query._page;
    },
    pagesRange() {
      const range = 9;
      const offset = Math.ceil(range / 2);
      const pages = [];
      for (let i = 1; i <= this.pages; i++) {
        pages.push(i);
      }
      pages.splice(0, this.currentPage - offset);
      pages.splice(range, this.pages);
      return pages;
    },
  },
  methods: {
    query(_page) {
      return {
        ...this.$route.query,
        _page,
      };
    },
  },
  props: {
    pageProductsLimit: {
      type: Number,
      default: 0,
    },
    totalCount: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
nav {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
}

li {
 display: inline-block;
}

li a {
  padding: 4px 8px;
  border-radius: 2px;
  margin: 4px;
}

li a.router-link-exact-active,
li a:hover {
  background-color: var(--color-primary);
  color: white;
}

.page-jumper {
  margin-left: 15px;
  margin-right: 15px;
  font-size: 15px;
}

.page-jumper.router-link-exact-active {
  opacity: 0.5;
  cursor:default;
}

.page-jumper:not(.router-link-exact-active):hover:after  {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  margin-top: 1px;
  background-color: var(--color-primary);
}
</style>
