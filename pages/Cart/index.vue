<template>
  <section class="cart">
    <div class="container container--max-width">
      <div class="cart__left">
        <div v-if="cartItems.length">
          <table>
            <thead>
              <tr>
                <td>Product</td>
                <td>Price</td>
                <td>QTY</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item['.key']">
                <td>
                  {{ item.name }}
                  <button @click="removeProduct(item)">
                    Remove Product
                  </button>
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
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          No products in cart
        </div>
      </div>
      <div v-if="cartItems.length" class="cart__right">
        <div class="cart__total">
          <span>
            Cart total:
          </span>
          {{ totalPrice }}
        </div>
        <nuxt-link :to="{ name: 'Cart-Checkout' }" tag="button" class="btn btn--block btn--primary">
          Checkout
        </nuxt-link>
      </div>
    </div>
  </section>
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

<style lang="scss" scoped>
  .cart .container {
    display: flex;
  }

  .cart__left {
    width: 70%;
    padding-right: 24px;
  }

  .cart__right {
    width: 30%;
    padding-left: 24px;
  }
</style>
