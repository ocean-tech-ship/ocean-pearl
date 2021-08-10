<template>
  <div class="space-x-4 flex hidden lg:flex">
     <div v-for="status in StatusEnumMap" :key="status" class="border text-primary py-1 px-2 flex">
        <p class="small-text">{{status}}</p>
      </div>
  </div>
</template>

<script lang="ts">
  import StatusEnum from '../../enums/Status.enum';

  export default {
    data() {
      return {
        StatusEnumMap: {
          [StatusEnum.All]: 'All',
          [StatusEnum.Latest]: 'Latest',
          [StatusEnum.Hiring]: 'Hiring',
          [StatusEnum.Featured]: 'Featured',
          [StatusEnum.Fund]: 'Awaiting Fund'
        }
      }
    }
  }
</script>

<style>

</style>