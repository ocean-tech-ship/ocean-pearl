<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle">
      <app-icon class="w-10 h-10 text-primary" :data="icons.bars" />
    </label>
    <ul
      tabindex="0"
      class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52 space-y-2"
    >
      <li>
        <nuxt-link
          to="/"
          exact
          active-class="active"
          @click.native="removeFocus()"
        >
          {{ $t('navbar.navbarLinkDefault') }}
        </nuxt-link>
      </li>

      <li v-for="page in pages" :key="page.to">
        <nuxt-link
          :to="page.to"
          exact-active-class="active"
          @click.native="removeFocus()"
        >
          {{ page.title }}
        </nuxt-link>
      </li>

      <hr class="my-2 text-base-300" />

      <li>
        <management-options />
      </li>

      <management-links />

      <theme-switcher class="self-center" />
    </ul>
  </div>
</template>

<script>
import bars from '@iconify/icons-la/bars';
import AppIcon from '@/components/common/AppIcon';
import ManagementOptions from '@/components/app/header/ManagementOptions';
import ManagementLinks from '@/components/app/header/ManagementLinks';
import ThemeSwitcher from '@/components/app/header/ThemeSwitcher';

export default {
  name: 'MobileNavDropdown',

  components: { ThemeSwitcher, ManagementLinks, ManagementOptions, AppIcon },

  props: {
    pages: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      icons: {
        bars,
      },
    };
  },

  methods: {
    removeFocus() {
      setTimeout(() => document.activeElement.blur(), 150);
    },
  },
};
</script>

