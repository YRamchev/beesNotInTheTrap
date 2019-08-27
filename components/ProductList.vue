<template>
  <div>
    <h1>
      100% Bulgarian Honey!
    </h1>
    <div class="list">
      <div
        v-for="product in products"
        :key="product['.key']"
        class="list__item"
      >
        <ProductListItem :product="product" />
      </div>
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
    width: 25%;
    padding: 24px;
  }

  h1 {
    font-size: 2rem;
    font-weight: 900;
    text-align: center;
    margin-bottom: 48px;
  }
</style>
