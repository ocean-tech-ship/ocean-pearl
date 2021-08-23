<template>
  <div class="flex flex-wrap text-primary">
    <div class="flex border py-1 px-2 mt-1">
      <img
        class="mr-1 p-1"
        src="@/assets/images/icons/dropdown.svg"
        alt="dropdown"
      />
      <p class="small-text pr-8">{{ $t('jobs.status.dropDown1') }}</p>
    </div>
    <div class="flex border py-1 px-2 mt-1 xl:hidden">
      <img
        class="mr-1 p-1"
        src="@/assets/images/icons/dropdown.svg"
        alt="dropdown"
      />
      <p class="small-text pr-4">{{ $t('jobs.status.dropDown2') }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import StatusEnum from '../../enums/Status.enum';

export default {
  data() {
    return {
      StatusEnum: {
        [StatusEnum.All]: 'All',
        [StatusEnum.Latest]: 'Latest',
        [StatusEnum.Hiring]: 'Hiring',
        [StatusEnum.Featured]: 'Featured',
        [StatusEnum.Fund]: 'Awaiting Fund',
      },
    };
  },
};
</script>

<style></style>
