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
