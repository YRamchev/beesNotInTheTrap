<template>
  <section class="order-info">
    <div class="container container--max-width">
      <div>
        {{ orderData }}
      </div>
      <div>
        OrderId - {{ orderData.id }}
      </div>
      <div>
        User Info - {{ orderData.userInfo }}
      </div>
      <div>
        Products - {{ orderData.products }}
      </div>
      <div>
        Total Price - {{ orderData.total }}
      </div>

      <button class="btn btn--primary" @click="order">
        Order Now
      </button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      orderData: 'order/data'
    })
  },

  methods: {
    order () {
      this.$store.dispatch('order/createOrder')
        .then(() => {
          this.$store.dispatch('cart/clearCart')
        })
        .then(() => {
          const message = {
            text: 'Your order was successful',
            type: 'success'
          }

          this.$nuxt.$emit('flash-message', message)
        })
        .then(() => {
          this.$router.push({ name: 'index' })
        })
    }
  }
}
</script>
