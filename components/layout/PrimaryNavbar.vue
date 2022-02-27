<template>
  <nav class="navbar px-0 py-4 xl:py-16">
    <!-- corporate (always) -->
    <div class="navbar-start">
      <nuxt-link
        class="pl-0 btn btn-ghost normal-case text-lg text-primary"
        to="/"
      >
        <img class="pr-2" src="@/assets/images/pearl-logo.svg" alt="" />
        Ocean Pearl
      </nuxt-link>
    </div>

    <!-- main pages (>= xl) -->
    <div class="navbar-center hidden xl:flex">
      <ul class="menu menu-horizontal p-0 xl:space-x-8">
        <li v-for="page in pages" :key="page.to">
          <nuxt-link :to="page.to" active-class="text-primary">
            {{ page.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <!-- management / options (>= xl) -->
    <div class="hidden xl:flex navbar-end">
      <management-options />
      <theme-switcher class="pl-4" />
    </div>

    <!-- mobile navbar (until xl) -->
    <div class="xl:hidden navbar-end">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <app-icon class="w-10 h-10 text-primary" :data="icons.bars" />
        </label>
        <ul
          class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52 space-y-2"
        >
          <li v-for="page in pages" :key="page.to">
            <nuxt-link :to="page.to" active-class="active">
              {{ page.title }}
            </nuxt-link>
          </li>

          <hr class="my-2 text-base-300" />

          <li>
            <management-options />
          </li>

          <management-links />

          <li>
            <theme-switcher />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import bars from '@iconify/icons-la/bars';
import ThemeSwitcher from '@/components/layout/ThemeSwitcher';
import AppIcon from '@/components/common/AppIcon';
import ManagementLinks from '~/components/layout/ManagementLinks';
import ManagementOptions from '~/components/layout/ManagementOptions';

export default {
  name: 'PrimaryNavbar',

  components: {
    ManagementOptions,
    ManagementLinks,
    AppIcon,
    ThemeSwitcher,
  },

  data() {
    return {
      icons: {
        bars,
      },
      pages: [
        {
          title: 'Projects',
          to: '/projects',
        },
        {
          title: 'DAO Proposals',
          to: '/dao-proposals',
        },
        {
          title: 'DAO Voting',
          to: '/dao-voting',
        },
      ],
    };
  },
};
</script>
