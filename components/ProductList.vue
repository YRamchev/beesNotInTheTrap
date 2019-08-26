<template>
  <div class="list">
    <div
      v-for="product in products"
      :key="product['.key']"
      class="list__item"
    >
      <ProductListItem :product="product" />
    </div>
  </div>
</template>

<script>
import ProductListItem from './ProductListItem'

export default {
  components: {
    ProductListItem
  },

  props: {
    products: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: -24px;
  }

  .list__item {
    width: 20%;
    padding: 24px;
  }
</style>
