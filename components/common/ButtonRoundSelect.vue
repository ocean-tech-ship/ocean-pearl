<template>
  <main-dropdown>
    <template slot-scope="context">
      <p class="small-text" @click="context.toggleOpen">Select Round</p>
      <div
        v-if="context.open"
        class="shadow origin-top-right absolute left-0 mt-2 w-64 bg-grey border border-primary rounded overflow-hidden shadow-md"
      >
        <ul @click="context.toggleOpen">
          <li v-for="(item, index) of items" :key="index">
            <NuxtLink class="small-text block px-4 py-3" to="/projects">
              <p class="small-text">{{ item }}</p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </template>
  </main-dropdown>
</template>

<script>
import MainDropdown from '@/components/common/MainDropdown'

export default {
  name: 'ButtonWithDropdown',
  components: {
    MainDropdown,
  },
  props: {
    items: {
      type: Array,
      default: () => [
        'Round 7',
        'Round 6',
        'Round 5',
        'Round 4',
        'Round 3',
        'Round 2',
        'Round 1',
      ],
    },
  },
}
</script>

<style scoped>
li > a:hover {
  background: #bb2c7636;
  transition: 200ms;
}
</style>
