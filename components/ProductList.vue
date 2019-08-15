<template>
  <div>
    <h1>
      Bio Shop
    </h1>
    <div class="list">
      <div
        v-for="product in products"
        :key="product.id"
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

  data: () => ({
    products: [
      {
        id: 1,
        name: 'Natural Honey',
        price: 15,
        size: 420,
        thumb: 'http://3.imimg.com/data3/AU/VG/GLADMIN-74494/honey-jar-500x500.jpg'
      },
      {
        id: 2,
        name: 'Natural Honey with Mint',
        price: 20,
        size: 420,
        thumb: 'https://i2.wp.com/www.bumbleberryfarms.com/wp-content/uploads/2018/04/honey-with-dipper.jpg?fit=640%2C640&ssl=1'
      }
    ]
  })
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
</style>
