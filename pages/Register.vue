<template>
  <div>
    <form @submit.prevent="register">
      <input v-model="form.email" type="text" />
      <input v-model="form.password" type="password" />
      <button type="submit">
        Register
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
    register () {
      this.$store.dispatch('auth/createUserWithEmailAndPassword', this.form)
        .then(() => {
          this.form.email = ''
          this.form.password = ''
        })
        .then(() => {
          this.$router.push({ name: 'index' })
        })
    }
  }
}
</script>
