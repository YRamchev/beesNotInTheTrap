<template>
  <section class="checkout">
    <div class="container container--max-width">
      <h1>
        Checkout
      </h1>
      <p>
        Please fill in your information and we'll be sending your order in no time.
      </p>

      <form class="form" @submit.prevent="submit">
        <div class="row">
          <div class="col">
            <div class="form__group">
              <label>
                <div class="form__label">
                  First name:
                </div>
                <div class="form__input">
                  <input v-model="form.firstName" type="text">
                </div>
              </label>
            </div>
          </div>
          <div class="col">
            <div class="form__group">
              <label>
                <div class="form__label">
                  Last name:
                </div>
                <div class="form__input">
                  <input v-model="form.lastName" type="text">
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="form__group">
              <label>
                <div class="form__label">
                  Shipping Address:
                </div>
                <div class="form__input">
                  <input v-model="form.address" type="text">
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="form__group">
              <label>
                <div class="form__label">
                  City:
                </div>
                <div class="form__input">
                  <input v-model="form.city" type="text">
                </div>
              </label>
            </div>
          </div>
          <div class="col">
            <div class="form__group">
              <label>
                <div class="form__label">
                  Region:
                </div>
                <div class="form__input">
                  <input v-model="form.region" type="text">
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="form__group">
              <label>
                <div class="form__label">
                  Postal/Zip Code:
                </div>
                <div class="form__input">
                  <input v-model.number="form.zip" type="text">
                </div>
              </label>
            </div>
          </div>
          <div class="col">
            <div class="form__group">
              <label>
                <div class="form__label">
                  Country:
                </div>
                <div class="form__input">
                  <input v-model="form.country" type="text">
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="btn-group btn-group--ease-top ">
          <button type="submit" class="btn btn--primary">
            Order
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        region: '',
        zip: null,
        country: ''
      }
    }
  },

  computed: {
    ...mapGetters({
      cartItems: 'cart/items',
      cartTotal: 'cart/total',
      loggedInUser: 'auth/loggedInUser'
    })
  },

  methods: {
    submit () {
      const userId = this.loggedInUser.id
      const order = {
        userInfo: this.form,
        total: this.cartTotal,
        products: this.cartItems
      }

      this.$store.dispatch('order/processOrder', { order, userId })
        .then(() => {
          this.$router.push({ name: 'Cart-Info' })
        })
    }
  }
}
</script>
