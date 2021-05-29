<template>
  <tr>
    <td class="flex my-2">
      <img class="ml-2" :src="icon" :alt="title + ' ' + $t('general.icon')" />
      <p class="small-text">
        {{ title }}
      </p>
    </td>

    <td class="my-2">
      <a class="text-primary small-text ml-12" target="_blank" :href="url">
        {{ url }}
      </a>
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
