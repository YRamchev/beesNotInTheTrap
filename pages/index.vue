<template>
  <div>
    <section class="shop-now">
      <div class="shop-now__image">
        <img src="/home-cover.jpg" alt="">
      </div>
      <h1 class="shop-now__title">
        Discover the Taste of Honey.
        {{ honey }}
      </h1>
      <nuxt-link
        :to="{ name: 'Products' }"
        class="btn btn--primary"
      >
        Shop Now
      </nuxt-link>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  head () {
    return {
      title: 'Welcome | BeesInTheTrap',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },

  async asyncData () {
    const res = await axios.get('https://nuxt-ssr.firebaseio.com/facts.json')
    const honey = res.data

    return { honey }
  }
}
</script>

<style scoped>
  .shop-now {
    padding: 72px 48px;
    text-align: center;
  }

  .shop-now__title {
    text-transform: uppercase;
    font-size: 2rem;
    margin-top: -72px;
    margin-bottom: 24px;
  }

  .shop-now__image img {
    width: 60%;
  }

  .btn {
    display: inline-block;
    padding: 12px 24px;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    border-radius: 4px;
    font-weight: bold;
  }

  .btn--primary {
    background: #a7ce0c;
  }
</style>
