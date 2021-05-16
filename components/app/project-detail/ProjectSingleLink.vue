<template>
  <tr>
    <td class="flex my-2">
      <img class="mr-2" :src="icon" :alt="title" />
      <p class="small-text" v-text="title" />
    </td>

    <td class="my-2">
      <a class="text-primary small-text ml-12" :href="url" v-text="url" />
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProjectSingleLink',

  props: ['icon', 'title', 'url'],
}
</script>

<style scoped></style>
