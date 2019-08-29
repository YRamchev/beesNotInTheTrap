<template>
  <div>
    <TheHeader />
    <main>
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import { auth } from '../plugins/firebase'
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  },

  beforeCreate () {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const userData = {
          email: user.email
        }
        this.$store.commit('auth/SET_USER', userData)
      }
    })
  }
}
</script>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 24px;
  }
</style>
