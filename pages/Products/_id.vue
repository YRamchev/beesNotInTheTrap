<template>
  <section class="container container--max-width">
    <div>
      name - {{ product.name }}
    </div>
    <div>
      description - {{ product.description }}
    </div>
    <div>
      inStock - {{ product.inStock }}
    </div>
    <div>
      price - {{ product.price }}
    </div>
    <button @click="addToCart">
      add to cart
    </button>
  </section>
</template>

<script>

export default {
  head () {
    return {
      title: `${this.product.name} | BeesInTheTrap`,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  async asyncData ({ store, route }) {
    const product = await store.dispatch('honey/fetchProduct', route.params.id)

    return {
      product
    }
  },

  methods: {
    addToCart () {
      this.product['.key'] = this.$route.params.id
      this.$store.dispatch('cart/addToCart', this.product)
    }
  }
}
</script>
