<template>
  <Transition name="slide-fade">
    <div v-if="message" class="flash-message">
      asd
    </div>
  </Transition>
</template>

<script>
export default {
  data () {
    return {
      message: null
    }
  },

  mounted () {
    this.$nuxt.$on('flash-message', (message) => {
      this.message = message

      setTimeout(() => {
        this.message = null
      }, 5000)
    })
  }
}
</script>

<style lang="scss" scoped>
  .flash-message {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.4s;
    background: red;
  }

  .slide-fade-enter .flash-message {
    top: 0;
    opacity: 0;
  }

  .slide-fade-enter-to .flash-message {
    top: 24px;
    opacity: 1;
  }

  .slide-fade-enter-to .flash-message {
    top: 24px;
    opacity: 1;
  }

  .slide-fade-enter .flash-message {
    top: 0;
    opacity: 0;
  }
</style>
