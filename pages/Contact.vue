<template>
  <section class="contact">
    <div class="container container--max-width">
      <h1>
        Contact Us
      </h1>

      <form @submit.prevent="submit">
        test
      </form>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Contact Us | BeesInTheTrap',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>
