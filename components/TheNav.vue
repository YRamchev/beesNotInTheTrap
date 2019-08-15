<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    color="grey lighten-4"
  >
    <v-list
      dense
      class="grey lighten-4"
    >
      <template v-for="(item, i) in items">
        <v-row
          v-if="item.heading"
          :key="i"
          align="center"
        >
          <v-flex cols="6">
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
        </v-row>
        <v-divider
          v-else-if="item.divider"
          :key="i"
          dark
          class="my-4"
        />
        <v-list-item
          v-else
          :key="i"
          @click="redirect(item.name)"
        >
          <v-list-item-content>
            <v-list-item-title class="grey--text">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    items: [
      { name: 'Products', text: 'Bio Honey Shop' },
      { name: 'RentHive', text: 'Rent A Hive' },
      { name: 'EApiary', text: 'Apiary App' },
      { divider: true },
      { heading: 'About Us' },
      { name: '/', text: 'Our Mission' },
      { name: '/', text: 'Our Story' },
      { divider: true },
      { heading: 'About Us' },
      { name: '/', text: 'Archive' },
      { name: '/', text: 'Trash' }
    ]
  }),

  methods: {
    redirect (pageName) {
      this.$router.push({ name: pageName })
    }
  }
}
</script>
