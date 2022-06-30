<template>
  <app-dropdown class="dropdown-end" btn-class="btn btn-ghost btn-circle gap-0">
    <template #icon>
      <app-icon class="w-10 h-10 text-primary" :data="icons.bars" />
    </template>
    <app-dropdown-menu class="mt-4" :close-time-clicked="null">
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
          active-class="active"
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

      <theme-switcher />
    </app-dropdown-menu>
  </app-dropdown>
</template>

<script>
import bars from '@iconify/icons-la/bars';
import AppDropdown from '@/components/common/AppDropdown';
import AppDropdownMenu from '@/components/common/AppDropdownMenu';
import AppIcon from '@/components/common/AppIcon';
import ManagementOptions from '@/components/app/header/ManagementOptions';
import ManagementLinks from '@/components/app/header/ManagementLinks';
import ThemeSwitcher from '@/components/app/header/ThemeSwitcher';

export default {
  name: 'MobileNavDropdown',

  components: {
    AppDropdownMenu,
    AppDropdown,
    ThemeSwitcher,
    ManagementLinks,
    ManagementOptions,
    AppIcon,
  },

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

