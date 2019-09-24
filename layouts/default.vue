<template>
  <div>
    <TheHeader />
    <FlashMessage />
    <main>
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import FlashMessage from '@/components/FlashMessage'

export default {
  components: {
    TheHeader,
    TheFooter,
    FlashMessage
  },

  beforeCreate () {
    this.$store.dispatch('auth/initAuthentication')
  }
}
</script>
