<template>
  <!-- <nuxt-link :to="{ name: 'Products-id', params: { id: product['.key'] } }"> -->
  <div>
    {{ product['.key'] }}
    {{ product.name }}
    {{ product.price }}
    <button @click="addToCart">
      Add to cart
    </button>
  </div>
  <!-- </nuxt-link> -->
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object
    }
  },

  methods: {
    addToCart () {
      const product = {
        '.key': this.product['.key'],
        name: this.product.name,
        price: this.product.price
      }

      this.$store.dispatch('cart/addToCart', product)
    }
  }
}
</script>

<style scoped>

</style>
