<template>
  <app-link :to="to">
    <div :class="cardClass" class="card">
      <slot />
    </div>
  </app-link>
</template>

<script>
import AppLink from '@/components/common/AppLink';
export default {
  name: 'AppLinkCard',
  components: { AppLink },
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
