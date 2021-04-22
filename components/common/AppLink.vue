<template>
  <nuxt-link v-if="isNuxtLink" class="inline-block" :to="to"
    ><slot></slot
  ></nuxt-link>
  <a
    v-else
    class="inline-block"
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
    ><slot></slot>
  </a>
</template>

<script>
export default {
  name: 'AppLink',
  props: ['to'],
  computed: {
    isNuxtLink() {
      if (this.to) {
        return this.to.substring(0, 1) === '/'
      }
      return false
    },
  },
}
</script>

<style scoped lang="scss"></style>
