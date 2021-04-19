<template>
  <div class="flex flex-wrap text-primary">
        <div class="flex border py-1 px-2 mt-1">
            <img class="mr-1 p-1" src="@/assets/images/icons/dropdown.png" alt="dropdown">
            <p class="small-text pr-8">Latest</p>
        </div>
        <div class="flex border py-1 px-2 mt-1 xl:hidden">
            <img class="mr-1 p-1" src="@/assets/images/icons/dropdown.png" alt="dropdown">
            <p class="small-text pr-4">Category</p>
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