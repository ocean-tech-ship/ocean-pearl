<template>
  <div class="dropdown z-dropdown">
    <label
      tabindex="0"
      class="btn gap-2 normal-case"
      :class="btnClass"
      @mousedown="handleDropdownClicked"
      @blur="handleDropdownBlur"
    >
      <slot v-if="$slots.icon" name="icon"></slot>
      <app-icon v-else-if="icon" :data="currentIcon" :size="iconSize" />

      <slot v-if="$slots.label" name="label" />
      <span v-else>{{ btnText }}</span>
    </label>

    <!-- provide menu via default slot -->
    <slot v-if="isActive" />
  </div>
</template>

<script>
import AppIcon from '@/components/common/AppIcon';

export default {
  name: 'AppDropdown',

  components: { AppIcon },

  props: {
    icon: {
      type: Object,
      default: null,
    },
    iconActive: {
      type: Object,
      default: null,
    },
    iconSize: {
      type: Number,
      default: 20,
    },
    btnText: {
      type: String,
      default: null,
    },
    btnClass: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      currentIcon: this.icon,
      isActive: false,
    };
  },

  methods: {
    handleDropdownClicked(e) {
      const targetEl = e.currentTarget;
      if (targetEl && targetEl.matches(':focus')) {
        setTimeout(() => {
          targetEl.blur();
          this.handleDropdownBlur();
        }, 0);
      } else {
        if (this.iconActive) this.currentIcon = this.iconActive;
        this.isActive = true;
      }
    },
    handleDropdownBlur() {
      this.currentIcon = this.icon;
    },
  },
};
</script>
