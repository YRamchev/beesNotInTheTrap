<template>
  <header class="header">
    <div class="header__left">
      <div class="header__logo">
        <nuxt-link :to="{name: 'index'}">
          Logo
        </nuxt-link>
      </div>
      <div class="header__nav">
        <TheNav />
      </div>
    </div>
    <div class="header__right">
      <a href="" @click.prevent="signOut">
        sign out
      </a>
      <nuxt-link :to="{name: 'Cart'}">
        ACCOUNT
      </nuxt-link>
      <nuxt-link :to="{name: 'Cart'}">
        CART
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

  methods: {
    signOut () {
      this.$store.dispatch('auth/signOut')
        .then(() => {
          this.$router.push({ name: 'index' })
        })
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
    padding: 24px;
  }

  .header__left {
    display: flex;
    align-items: center;
  }
</style>
