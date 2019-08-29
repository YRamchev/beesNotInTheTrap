<template>
  <div>
    Profile
    <button @click="signOut">
      Sign Out
    </button>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Profile | BeesInTheTrap',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
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
