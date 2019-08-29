<template>
  <div class="container">
    <ProductList :products="products" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'

export default {
  components: {
    ProductList
  },

  head () {
    return {
      title: 'Honey Shop | BeesInTheTrap',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },

  async asyncData ({ store }) {
    await store.dispatch('honey/fetchProducts')
    const products = Object.values(store.getters['honey/items'])

    return {
      products
    }
  }
}
</script>

<style scoped>
</style>
