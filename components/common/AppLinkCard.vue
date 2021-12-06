<template>
  <NuxtLink :prefetch="prefetch" :to="to">
    <div :class="cardClass" class="card">
      <slot />
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'AppLinkCard',
  props: {
    prefetch: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: true,
      default: '',
    },
    cardClass: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 760px) {
  .card {
    transition: 100ms ease-in-out;
  }
  .card:hover {
    transform: translateY(-6px);
  }
}
</style>
