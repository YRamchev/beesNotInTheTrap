<template>
  <header class="header">
    <div class="header__left">
      <div class="header__logo">
        <nuxt-link :to="{ name: 'index' }">
          <img src="http://www.beepurehoney.com/images/template/bee_pure_honey_logo.png" alt="" width="137">
        </nuxt-link>
      </div>
    </div>
    <div class="header__center">
      <TheNav />
    </div>
    <div class="header__right">
      <nuxt-link v-if="$store.getters['auth/isAuthenticated']" :to="{ name: 'Profile' }" class="header__account">
        <span class="icon-user" /> Profile
      </nuxt-link>
      <div v-else class="header__account">
        <span class="icon-user" />
        <nuxt-link :to="{ name: 'Login' }">
          Login
        </nuxt-link>
        <span class="header__account-or">
          or
        </span>
        <nuxt-link :to="{ name: 'Register' }">
          Register
        </nuxt-link>
      </div>

      <nuxt-link :to="{ name: 'Cart' }" class="header__cart">
        <span class="icon-shopping-bag" />
        <span class="header__cart">{{ cartTotal }}</span>
        <span class="header__cart-counter">
          {{ cartCount }}
        </span>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
import TheNav from '@/components/TheNav'

export default {
  components: {
    TheNav
  },

  computed: {
    cartCount () {
      return this.$store.getters['cart/count']
    },

    cartTotal () {
      return this.$store.getters['cart/total']
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    background: #fff;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    border-bottom: 1px solid #f1f1f1;
  }

  .header__left,
  .header__right,
  .header__cart,
  .header__account {
    display: flex;
    align-items: center;
  }

  .icon-shopping-bag {
    font-size: 24px;
    margin-left: 24px;
  }

  .icon-user {
    font-size: 24px;
    margin-right: 6px;
  }

  .header__cart,
  .header__account-or {
    margin-left: 6px;
    margin-right: 6px;
  }

  .header__account-or {
    color: rgba(0, 0, 0, .57);
  }

  .header__cart-counter {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #00CC66;
    margin-left: 4px;
  }
</style>
