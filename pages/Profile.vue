<template>
  <div class="container container--max-width">
    <h1>
      Profile
    </h1>
    <button class="btn btn--outline" @click="signOut">
      Sign Out
    </button>
    <h1>
      Orders
    </h1>
    <div>
      {{ userOrders }}
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',

  head () {
    return {
      title: 'Profile | BeesInTheTrap',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },

  data () {
    return {
      userOrders: 'test'
    }
  },

  created () {
    const userId = this.$store.getters['auth/userId'] ? this.$store.getters['auth/userId'] : JSON.parse(localStorage.getItem('user')).id
    this.$store.dispatch('order/fetchUserOrders', userId)
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
