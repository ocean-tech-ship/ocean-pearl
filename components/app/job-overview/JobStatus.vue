<template>
  <div class="text-primary">
        <div class="flex border py-1 px-2">
            <img class="mr-1 p-1" src="@/assets/images/icons/dropdown.png" alt="dropdown">
            <p class="small-text pr-8">Latest</p>
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