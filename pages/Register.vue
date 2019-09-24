<template>
  <div>
    <form @submit.prevent="register">
      <input v-model="form.email" type="text">
      <input v-model="form.password" type="password">
      <button type="submit">
        Register
      </button>
    </form>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'notAuthenticated',

  head () {
    return {
      title: 'Register | BeesInTheTrap',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },

  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      error: ''
    }
  },

  methods: {
    async register () {
      try {
        await this.$store.dispatch('auth/createUserWithEmailAndPassword', this.form)
          .then(() => {
            this.form.email = ''
            this.form.password = ''
          })
          .then(() => {
            this.$router.push({ name: 'index' })
          })
      } catch (err) {
        this.error = err
      }
    }
  }
}
</script>
