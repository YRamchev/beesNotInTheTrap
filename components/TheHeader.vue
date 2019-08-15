<template>
  <header>
    <v-app-bar
      app
      clipped-left
      color="amber"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <nuxt-link :to="{name: 'index'}" tag="span" class="header-logo">
        <span class="title ml-3 mr-5">
          BeesNotInTheTrap&nbsp;
        </span>
      </nuxt-link>
      <v-spacer />
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
      />
      <v-spacer />
      <div>
        <button type="button" class="v-btn v-btn--flat v-btn--icon v-btn--round theme--dark v-size--default">
          <span class="v-btn__content">
            <i aria-hidden="true" class="v-icon notranslate mdi mdi-cart theme--dark" />
          </span>
        </button>
        <button type="button" class="v-btn v-btn--flat v-btn--icon v-btn--round theme--dark v-size--default">
          <span class="v-btn__content">
            <i aria-hidden="true" class="v-icon notranslate mdi mdi-account theme--dark" />
          </span>
        </button>
      </div>
    </v-app-bar>

    <TheNav :drawer="drawer" />
  </header>
</template>

<script>
import TheNav from '@/components/TheNav'

export default {
  components: {
    TheNav
  },
  data: () => ({
    drawer: true
  })
}
</script>

<style scoped>
  .header-logo {
    cursor: pointer;
  }
</style>
