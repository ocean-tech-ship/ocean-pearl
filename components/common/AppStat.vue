<template>
  <div class="stats shadow bg-base-200">
    <!-- provide stat items via default slot  -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppStat',
};
</script>
