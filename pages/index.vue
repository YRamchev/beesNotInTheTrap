<template>
  <div>
    <section class="shop-now">
      <div class="container container--max-width">
        <div class="shop-now__left">
          <h1 class="shop-now__title">
            Discover the Taste of Honey.
          </h1>
          <h2 class="shop-now__intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestiae quibusdam dignissimos rem animi cumque quisquam hic perspiciatis ut iusto, id facilis voluptatem. Doloremque harum impedit amet fugiat enim facilis.
          </h2>
          <nuxt-link
            :to="{ name: 'Products' }"
            class="btn btn--primary"
          >
            Shop Now
          </nuxt-link>
        </div>
        <div class="shop-now__right">
          Image
        </div>
      </div>
    </section>
    <section class="info">
      <div class="container container--max-width">
        <div class="col">
          100% organic
        </div>
        <div class="col">
          With a couse
        </div>
        <div class="col">
          Beautifully packed
        </div>
        <div class="col">
          Free shipping
        </div>
      </div>
    </section>
    <section class="featured">
      <div class="container container--max-width">
        Featured products
      </div>
    </section>
    <section class="feedback">
      <div class="container container--max-width">
        Clients feedback
      </div>
    </section>
    <section class="subscribe">
      <div class="container container--max-width">
        Subscribe
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Welcome | BeesInTheTrap',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style scoped>
  .shop-now {
    padding: 72px 48px;
    min-height: 650px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .shop-now:before {
    content: '';
    background: url("/home-cover.jpg") center center no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;;
    z-index: -1;
  }

  .shop-now .container {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .shop-now__left,
  .shop-now__right {
    width: 50%;
  }

  .shop-now__title {
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 24px;
    color: #fff;
    font-weight: bold;
  }

  .shop-now__intro {
    color: #fff;
    margin-bottom: 24px;
    font-size: 1.2rem;
  }
</style>
