<template>
  <section class="login-wrapper">
    <div class="login">
      <h1 class="login__title">
        Welcome Back, Please Login to your account
      </h1>
      <div class="btn-group">
        <button class="btn btn--block btn--facebook">
          Login with Facebook
        </button>
        <button class="btn btn--block btn--google" @click="signInWithGoogle">
          Login with Google
        </button>
      </div>
      <h2 class="login__or">
        - or use your e-mail account -
      </h2>
      <form class="login__form" @submit.prevent="signIn">
        <div class="form__group">
          <label>
            <div class="form__label">
              E-mail
            </div>
            <div class="form__input">
              <input v-model="form.email" type="text">
            </div>
          </label>
        </div>

        <div class="form__group">
          <label>
            <div class="form__label">
              Password
            </div>
            <div class="form__input">
              <input v-model="form.password" type="password">
            </div>
          </label>
        </div>
        <div class="btn-group">
          <button class="btn btn--primary login__btn" type="submit">
            Sign In
          </button>
          <nuxt-link :to="{ name: 'Register' }" tag="button" class="btn btn--ghost login__btn" type="submit">
            Sign Up
          </nuxt-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'authenticated',

  head () {
    return {
      title: 'Login | BeesInTheTrap',
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
      }
    }
  },

  methods: {
    async signIn () {
      await this.$store.dispatch('auth/signInWithEmailAndPassword', this.form)
        .then(() => {
          this.$router.push({ name: 'index' })
        })
    },

    async signInWithGoogle () {
      await this.$store.dispatch('auth/signInWithGoogle')
        .then(() => {
          this.$router.push({ name: 'index' })
        })
    }
  }
}
</script>

<style scoped>
  .login-wrapper {
    min-height: calc(100vh - 103px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
  }

  .login {
    padding: 72px 48px;
    border-radius: 5px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
    width: 550px;
  }

  .login__title {
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 48px;
    color: rgba(0, 0, 0, 0.87);
  }

  .login__or {
    color: rgba(0, 0, 0, 0.57);
    margin: 48px auto;
    text-align: center;
    text-transform: uppercase;
    font-size: .9rem;
  }

  .login__btn {
    margin-top: 24px;
  }

  .form__group {
    display: block;
    width: 100%;
  }

  .form__group + .form__group {
    margin-top: 12px;
  }

  .form__group input {
    border: 1px solid rgba(0, 0, 0, 0.27);
    padding: 12px;
    border-radius: 5px;
    width: 100%;
  }

  .form__label {
    margin-bottom: 6px;
    color: rgba(0, 0, 0, 0.57);
  }

  .btn {
    line-height: 1;
    font-size: 1rem;
    display: inline-flex;
    padding: 12px 24px;
    text-align: center;
    border-radius: 5px;
  }

  .btn--block {
    display: block;
    width: 100%;
  }

  .btn--primary {
    background: #00CC66;
    color: #fff;
  }

  .btn--ghost {
    -webkit-box-shadow: inset 0px 0px 0px 1px rgba(0,0,0,.27);
    -moz-box-shadow: inset 0px 0px 0px 1px rgba(0,0,0,.27);
    box-shadow: inset 0px 0px 0px 1px rgba(0,0,0,.27);
  }

  .btn--facebook {
    background: #4166b2;
    color: #fff;
  }

  .btn--google {
    background: #ef514e;
    color: #fff;
  }

  .btn-group {
    display: flex;
  }

  .btn-group .btn + .btn {
    margin-left: 12px;
  }
</style>
