<template>
  <nuxt-link :to="{ name: 'Products-id', params: { id: product['.key'] } }" class="product">
    <div class="product__image">
      <img
        src="https://www.beechworthhoney.com.au/wp-content/uploads/2017/10/BeeRaw_honeyhoneycomb_240g_6006x600.png"
        alt="test"
      >
    </div>
    <h2 class="product__title">
      {{ product.name }}
    </h2>
    <div class="product__from">
      from
    </div>
    <div class="product__price">
      &euro;{{ product.price }}
    </div>
  </nuxt-link>
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
.product {
  display: block;
  box-shadow: 0;
  transition: box-shadow 0.2s ease-in-out;
  padding: 24px;
}

.product:hover {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
}

.product__image img {
  width: 100%;
}

.product__title {
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 24px;;
}

.product__from {
  text-align: center;
  color: rgba(0, 0, 0, 0.37);
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 12px;
}

.product__price {
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
