<template>
  <div
    class="
      label
      rounded
      border
      px-2.5
      py-0.5
      inline-flex
      items-center
      justify-center
      small-text
      text-darkgrey
    "
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'AppLabel',
};
</script>
