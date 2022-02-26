<template>
  <div class="shadow bg-base-200 rounded p-2 pb-8">
    <div class="animate-pulse w-full h-full flex flex-col items-center">
      <div class="mt-3 w-12 h-12 rounded bg-primary opacity-70" />
      <div class="mt-10 w-full flex flex-col items-center">
        <div class="mt-1 w-4/5 h-4 rounded bg-primary opacity-70" />
        <div class="mt-3 w-2/5 h-3 rounded bg-primary opacity-70" />
      </div>
      <div class="mt-6 w-full flex flex-col items-center">
        <div class="mt-3 w-4/5 h-3 rounded bg-primary opacity-70" />
        <div class="mt-3 w-1/3 h-3 rounded bg-primary opacity-70" />
        <div class="mt-3 w-2/3 h-3 rounded bg-primary opacity-70" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSkeletonCard',
};
</script>
