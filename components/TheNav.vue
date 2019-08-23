<template>
  <nav class="nav-wrapper">
    <ul class="nav">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="nav__item"
      >
        <nuxt-link
          :to="{ name: item.name }"
          class="nav__link"
        >
          {{ item.text }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    items: [
      { name: 'Products', text: 'Honey Shop' },
      { name: 'RentHive', text: 'Rent A Hive' },
      { name: 'index', text: 'Our Mission' },
      { name: 'index', text: 'Blog' },
      { name: 'index', text: 'Contact Us' }
    ]
  })
}
</script>

<style scoped>
  .nav {
    display: flex;
    list-style: none;
  }

  .nav__link {
    display: block;
    text-decoration: none;
    padding: 12px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, .57);
  }

  .nav__link:hover,
  .nav__link.nuxt-link-exact-active {
    color: rgba(0, 0, 0, .87);
  }
</style>
