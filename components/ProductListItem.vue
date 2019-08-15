<template>
  <nuxt-link :to="{name: 'Products-id', params: {id: product.id}}" class="product">
    <div class="product__img-wrapper">
      <img :src="product.thumb" alt="" class="product__img">
    </div>
    <h2 class="product__name">
      {{ product.name }}
    </h2>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .product {
    display: block;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
  }

  .product__img-wrapper {
    padding-bottom: 100%;
    position: relative;
  }

  .product__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product__name {
    padding-top: 12px;
    font-weight: bold;
    color: rgba(0, 0, 0, .87)
  }
</style>
