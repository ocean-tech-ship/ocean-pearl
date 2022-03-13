<template>
  <label class="swap swap-rotate w-20 h-20">
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
      darkMode: this.$cookies.get('theme') === 'dark',
      icons: {
        moon,
        sun,
      },
    };
  },

  watch: {
    darkMode(enable) {
      this.$cookies.set('theme', enable ? 'dark' : 'light', {
        maxAge: 60 * 60 * 24 * 365,
      });

      document
        .querySelector('html')
        .setAttribute('data-theme', enable ? 'dark' : 'light');
    },
  },

  mounted() {
    if (!this.$cookies.get('theme'))
      this.darkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
  },
};
</script>
