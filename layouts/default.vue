<template>
  <v-app>
    <TheHeader />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import { auth } from '../plugins/firebase'
import TheHeader from '@/components/TheHeader'

export default {
  components: {
    TheHeader
  },
  created () {
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
    padding: 24px;
  }
</style>
