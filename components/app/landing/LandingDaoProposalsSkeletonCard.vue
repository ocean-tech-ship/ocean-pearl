<template>
  <div class="shadow bg-base-200 rounded h-330px p-8">
    <div class="animate-pulse py-2 h-full flex flex-col">
      <div class="flex">
        <div class="mr-3">
          <div class="mr-2 w-10 h-10 rounded bg-primary opacity-70" />
        </div>

        <div class="flex-1">
          <div class="w-4/5 h-4 rounded bg-primary opacity-70" />
          <div class="mt-3 w-2/5 h-3 rounded bg-primary opacity-70" />
        </div>
      </div>

      <div>
        <div class="mt-10 w-4/5 h-3 rounded bg-primary opacity-70" />
        <div class="mt-3 w-2/4 h-3 rounded bg-primary opacity-70" />
        <div class="mt-3 w-full h-3 rounded bg-primary opacity-70" />
      </div>

      <div class="flex mt-auto">
        <div class="flex">
          <div class="mr-2 w-6 h-6 rounded bg-primary opacity-70" />
        </div>
        <div class="flex-1 flex flex-col mt-1">
          <div class="w-2/5 h-3 rounded bg-primary opacity-70" />
        </div>
      </div>
      <div class="mt-3 w-1/3 h-3 rounded bg-primary opacity-70" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingDaoProposalsSkeletonCard',
};
</script>
