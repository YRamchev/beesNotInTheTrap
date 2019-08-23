<template>
  <div>
    <form @submit.prevent="signIn">
      <input v-model="form.email" type="text" />
      <input v-model="form.password" type="password" />
      <button type="submit">
        Sign In
      </button>
    </form>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    signIn () {
      this.$store.dispatch('auth/signInWithEmailAndPassword', this.form)
        .then(() => {
          this.$router.push({ name: 'index' })
        })
    }
  }
}
</script>
