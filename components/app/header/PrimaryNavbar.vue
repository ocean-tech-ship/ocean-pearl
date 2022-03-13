<template>
  <nav
    class="sticky top-0 w-full z-nav shadow bg-base-100 xl:relative xl:shadow-none"
  >
    <section-container class="navbar px-0 py-4 xl:py-16">
      <!-- corporate (always) -->
      <div class="navbar-start">
        <nuxt-link
          class="pl-0 btn btn-ghost normal-case text-lg text-primary"
          to="/"
        >
          <img
            class="pr-2"
            src="@/assets/images/pearl-logo.svg"
            :alt="$t('general.logo')"
          />
          {{ $t('navbar.logoText') }}
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

            <theme-switcher class="self-center" />
          </ul>
        </div>
      </div>
    </section-container>
  </nav>
</template>

<script>
import bars from '@iconify/icons-la/bars';
import SectionContainer from '@/components/common/SectionContainer';
import ManagementOptions from '@/components/app/header/ManagementOptions';
import ManagementLinks from '@/components/app/header/ManagementLinks';
import AppIcon from '@/components/common/AppIcon';
import ThemeSwitcher from '@/components/app/header/ThemeSwitcher';

export default {
  name: 'PrimaryNavbar',

  components: {
    SectionContainer,
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
          title: this.$t('navbar.navbarProjects'),
          to: '/projects',
        },
        {
          title: this.$t('navbar.navbarProposals'),
          to: '/dao-proposals',
        },
        {
          title: this.$t('navbar.navbarVoting'),
          to: '/dao-voting',
        },
      ],
    };
  },

  methods: {
    removeFocus() {
      setTimeout(() => document.activeElement.blur(), 150);
    },
  },
};
</script>
