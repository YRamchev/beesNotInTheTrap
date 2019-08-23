<template>
  <div class="container">
    <ProductList />
    {{ products }}
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'

export default {
  components: {
    ProductList
  },
  asyncData ({ store }) {
    store.dispatch('honey/fetchHoney')
    const products = store.state.honey.items
    return { products }
  }
}
</script>

<style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
  }
</style>
