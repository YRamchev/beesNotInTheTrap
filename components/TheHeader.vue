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
        Profile
      </nuxt-link>
      <nuxt-link v-else :to="{ name: 'Login' }" class="header__account">
        Login / Register
      </nuxt-link>
      <nuxt-link :to="{ name: 'Cart' }" class="header__cart">
        <span class="icon-shopping-bag" />
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
  .header__cart {
    display: flex;
    align-items: center;
  }

  .icon-shopping-bag {
    font-size: 24px;
    margin-left: 12px;
  }

  .header__cart-counter {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    font-size: 13px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #839366;
    margin-left: 4px;
  }
</style>
