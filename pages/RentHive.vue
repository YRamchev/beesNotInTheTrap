<template>
  <div>
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
      this.$store.dispatch('honey/createHoney', this.honey)
    }
  }
}
</script>

<style scoped>
  input {
    background: red;
  }
</style>
