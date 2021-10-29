<template>
  <div
    :class="
      customClass
        ? customClass
        : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mt-12'
    "
  >
    <div v-for="i in quantity" :key="i">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSkeletonCardList',

  props: {
    customClass: {
      type: String,
      default: () => '',
    },
    quantity: {
      type: Number,
      default: () => 12,
    },
  },
};
</script>
