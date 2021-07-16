/* eslint-disable prettier/prettier */
<template>
  <div class="space-x-4 flex hidden lg:flex">
    <div>
      <input
        type="text"
        placeholder="search project..."
        class="py-3 pl-3 w-96 border-primary rounded border"
      />
    </div>
  </div>
</template>

<script lang="ts">
import EnumStatus from '../../enums/EnumStatus'

export default {
  data() {
    return {
      EnumStatus: {
        [EnumStatus.All]: 'check',
        [EnumStatus.Latest]: 'Latest',
        [EnumStatus.Hiring]: 'Hiring',
        [EnumStatus.Featured]: 'Featured',
        [EnumStatus.Fund]: 'Awaiting Fund',
      },
    }
  },
}
</script>

<style></style>
