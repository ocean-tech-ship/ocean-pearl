<template>
  <nav
    class="shadow lg:shadow-none fixed lg:relative z-nav top-0 w-full py-4 lg:py-16"
  >
    <div
      class="flex items-center justify-between 2sm:px-4 sm:px-16 md:px-32 mx-auto max-w-1440"
    >
      <NuxtLink to="/">
        <div class="flex items-center">
          <img src="@/assets/images/pearl-logo.svg" alt="pearl-logo" />
          <p class="xs:block lg:hidden xl:block pl-2 text-primary">
            {{ $t('navbar.logoText') }}
          </p>
        </div>
      </NuxtLink>

      <div
        class="flex-grow text-base-content items-center justify-end md:space-x-8 lg:space-x-62px 2xl:space-x-128px hidden lg:flex"
      >
        <NuxtLink to="/projects?first">{{
          $t('navbar.navbarProjects')
        }}</NuxtLink>

        <NuxtLink to="/dao-proposals?first">{{
          $t('navbar.navbarDao')
        }}</NuxtLink>

        <NuxtLink to="/dao-voting?current">{{
          $t('leaderboard.meta.title')
        }}</NuxtLink>

        <app-button
          v-if="!walletAddress"
          :text="$t('manage.auth.login.action')"
          @click="$store.dispatch('auth/login')"
        />

        <div v-else class="flex items-center">
          <nuxt-link
            to="/management"
            class="p-2 rounded flex items-center"
            style="background-color: black; color: white"
          >
            {{ shrinkAddress(walletAddress) }}
            <jazzicon
              class="flex items-center w-5 h-5 ml-2"
              :diameter="20"
              :address="walletAddress"
            />
          </nuxt-link>

          <main-dropdown>
            <template slot-scope="context">
              <button
                class="flex items-center pl-2"
                @click="context.toggleOpen()"
              >
                <app-icon
                  :rotate="context.open ? 180 : 0"
                  :size="24"
                  :data="icons.angleDown"
                  class="text-primary"
                />
              </button>

              <div
                v-if="context.open"
                class="shadow origin-top-right absolute right-0 mt-4 w-64 bg-grey border border-primary rounded overflow-hidden shadow-md"
              >
                <ul @click="context.toggleOpen()">
                  <li>
                    <nuxt-link to="/management">
                      <button type="button" class="font-bold block px-4 py-1">
                        {{ $t('manage.subtitle') }}
                      </button>
                    </nuxt-link>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="font-bold block px-4 py-1"
                      @click="$store.dispatch('auth/logout')"
                    >
                      {{ $t('manage.auth.logout.title') }}
                    </button>
                  </li>
                </ul>
              </div>
            </template>
          </main-dropdown>
        </div>

        <label class="swap swap-rotate">
          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" @change="toggleTheme()" />

          <!-- sun icon -->
          <svg
            class="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>

          <!-- moon icon -->
          <svg
            class="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>
      </div>
      <div class="lg:hidden">
        <app-mobile-navbar />
      </div>
    </div>
  </nav>
</template>

<script>
import angleDown from '@iconify/icons-la/angle-down';
import Jazzicon from 'vue-jazzicon';
import { mapState } from 'vuex';
import { SESSION_NAME } from '@/store/auth';
import EthAddress from '@/mixins/EthAddress';
import AppMobileNavbar from '@/components/layout/AppMobileNavbar.vue';
import MainDropdown from '@/components/common/MainDropdown.vue';
import AppIcon from '@/components/common/AppIcon.vue';
import AppButton from '@/components/common/AppButton';

export default {
  components: {
    AppButton,
    AppIcon,
    AppMobileNavbar,
    Jazzicon,
    MainDropdown,
  },

  mixins: [EthAddress],

  data() {
    return {
      icons: {
        angleDown,
      },
    };
  },

  computed: {
    ...mapState('account', {
      accountWallet: 'wallet',
    }),

    walletAddress() {
      return this.accountWallet || this.$cookies.get(SESSION_NAME);
    },
  },

  methods: {
    toggleTheme() {
      const theme = document.querySelector('html').getAttribute('data-theme');
      document
        .querySelector('html')
        .setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
    },
  },
};
</script>

<style scoped>
body {
  padding-top: 120px;

  @media (min-width: 992px) {
    padding-top: 0;
  }
}
</style>
