<template>
  <label class="swap swap-rotate">
    <input v-model="darkMode" type="checkbox" />
    <app-icon class="swap-on fill-current w-10 h-10" :data="icons.sun" />
    <app-icon class="swap-off fill-current w-10 h-10" :data="icons.moon" />
  </label>
</template>

<script>
import moon from '@iconify/icons-la/moon';
import sun from '@iconify/icons-la/sun';
import AppIcon from '@/components/common/AppIcon';

export default {
  name: 'ThemeSwitcher',

  components: { AppIcon },

  data() {
    return {
      darkMode: false,
      icons: {
        moon,
        sun,
      },
    };
  },

  watch: {
    darkMode(enable) {
      document
        .querySelector('html')
        .setAttribute('data-theme', enable ? 'dark' : 'light');
    },
  },
};
</script>
