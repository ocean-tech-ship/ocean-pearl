<template>
  <section tabindex="0" class="flex border py-1 pr-2.5 pl-1 mr-1 mt-1 relative">
    <button
      class="h-full flex items-center small-text"
      @click="toggleOpen"
      @blur="toggleOpen"
    >
      {{ buttonName }}
    </button>
    <section
      v-if="open"
      class="border bg-grey rounded shadow absolute top-10"
      @click="open = false"
    >
      <ul>
        <li
          v-for="menuItem of menuItems"
          :key="menuItem.value"
          :class="menuItem.selected"
          tabindex="0"
        >
          {{ menuItem.content }}
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  name: 'ButtonWithDropdown',
  components: {},
  props: {
    buttonName: {
      type: String,
      required: true,
      default() {},
    },
    menuItems: {
      type: Array,
      required: true,
      default() {},
    },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
    },
  },
}
</script>

<style scoped>
button:focus {
  outline: none;
}
button::before {
  content: '';
  background: url('@/assets/images/icons/dropdown.svg') center center no-repeat;
  display: block;
  width: 23px;
  height: 26px;
}
ul {
  min-width: 140px;
  max-width: auto;
  max-height: 160px;
  overflow-y: scroll;
}
li {
  padding: 0.5rem;
}
li:hover {
  background: #bb2c7636;
  transition: 200ms;
  cursor: pointer;
}
</style>
