<template>
  <div class="container container--max-width">
    <form @submit.prevent="addHoney">
      <input v-model="honey.name" type="text">
      <input v-model="honey.price" type="text">
      <button type="submit">
        Add honey
      </button>
    </form>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Rent a Hive | BeesInTheTrap',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },

  data () {
    return {
      honey: {
        name: '',
        price: null
      }
    }
  },

  methods: {
    addHoney () {
      this.$store.dispatch('honey/createProduct', this.honey)
    }
  }
}
</script>
