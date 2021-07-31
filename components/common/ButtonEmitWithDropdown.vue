<template>
  <section tabindex="0" class="flex border py-1 pr-2.5 pl-1">
    <button
      :class="{ open: open }"
      class="h-full flex items-center small-text relative"
      @click="toggleOpen"
      @blur="handleBlur"
    >
      {{ buttonName }}
    </button>
    <section
      v-if="open"
      class="border bg-grey rounded shadow absolute top-10 z-50"
    >
      <ul>
        <li
          v-for="menuItem of menuItems"
          :key="menuItem.value"
          :class="{ isActive: menuItem.selected }"
          class="menuItem"
          tabindex="0"
          @click="handleSelection(menuItem)"
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
    handleSelection(menuItem) {
      this.$emit('selected', menuItem)
      this.toggleOpen()
    },
    handleBlur(e) {
      if (
        (!e.relatedTarget && this.open) ||
        (!e.relatedTarget?.classList.contains('menuItem') && this.open)
      )
        this.toggleOpen()
    },
  },
}
</script>

<style lang="scss" scoped>
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
button.open::before {
  transform: rotate(180deg);
}

ul {
  min-width: 140px;
  max-width: auto;
  max-height: 160px;
  overflow-y: scroll;
  background: white;
  border-radius: 7px;
}
li {
  padding: 0.5rem;
}
li:hover {
  background: #bb2c7636;
  transition: 200ms;
  cursor: pointer;
}
.isActive {
  background: lighten(#bb2c7636, 25);
}
</style>
