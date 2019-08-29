<template>
  <div>
    <table v-if="cartItems.length">
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
            {{ item.quantity }}
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
      </tbody>
    </table>
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

  data () {
    return {
      cartItems: this.$store.getters['cart/items']
    }
  },

  methods: {
    totalPricePerItem (price, quantity) {
      return price * quantity
    },

    removeProduct (product) {
      this.$store.dispatch('cart/removeFromCart', product)
    }
  }
}
</script>
