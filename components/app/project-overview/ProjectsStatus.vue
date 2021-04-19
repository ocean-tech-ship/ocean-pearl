<template>
  <div class="space-x-4 flex hidden lg:flex">
     <div v-for="Status in EnumStatus" :key="Status" class="border text-primary py-1 px-2 flex">
        <p class="small-text">{{Status}}</p>
      </div>
  </div>
</template>

<script lang="ts">
  import EnumStatus from '../../enums/EnumStatus';

  export default {
    data() {
      return {
        EnumStatus: {
          [EnumStatus.All]: 'All',
          [EnumStatus.Latest]: 'Latest',
          [EnumStatus.Hiring]: 'Hiring',
          [EnumStatus.Featured]: 'Featured',
          [EnumStatus.Fund]: 'Awaiting Fund'
        }
      }
    }
  }
</script>

<style>

</style>