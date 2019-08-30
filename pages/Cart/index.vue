<template>
  <div class="container">
    <div v-if="cartItems.length">
      <table>
        <thead>
          <tr>
            <td>Product Name:</td>
            <td>Price:</td>
            <td>Quantity:</td>
            <td>Total:</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item['.key']">
            <td>
              {{ item.name }}
            </td>
            <td>
              {{ item.price }}
            </td>
            <td>
              <button @click="addToCart(item)">
                +
              </button>
              {{ item.quantity }}
              <button @click="removeFromCart(item)">
                -
              </button>
            </td>
            <td>
              {{ totalPricePerItem(item.price, item.quantity) }}
            </td>
            <td>
              <button @click="removeProduct(item)">
                Remove Product
              </button>
            </td>
          </tr>
          <tr>
            <td>.</td>
            <td>.</td>
            <td>Total Price:</td>
            <td>{{ totalPrice }}</td>
            <td>.</td>
          </tr>
        </tbody>
      </table>
      <nuxt-link :to="{ name: 'Cart-Checkout' }" tag="button">
        Checkout
      </nuxt-link>
    </div>
    <div v-else>
      No products in cart
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Cart | BeesInTheTrap',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },

  computed: {
    cartItems () {
      return this.$store.getters['cart/items']
    },

    totalPrice () {
      return this.$store.getters['cart/total']
    }
  },

  methods: {
    totalPricePerItem (price, quantity) {
      return price * quantity
    },

    addToCart (product) {
      this.$store.dispatch('cart/addToCart', product)
    },

    removeFromCart (product) {
      this.$store.dispatch('cart/removeFromCart', product)
    },

    removeProduct (product) {
      this.$store.dispatch('cart/removeFromCart', product)
    }
  }
}
</script>

<style scoped>
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 48px 24px;
  }
</style>
