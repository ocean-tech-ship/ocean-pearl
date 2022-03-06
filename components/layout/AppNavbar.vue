<template>
  <nav
    class="shadow lg:shadow-none bg-secondary sticky lg:relative z-nav top-0 w-full py-4 lg:py-16"
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
        class="flex-grow items-center justify-end md:space-x-8 lg:space-x-62px 2xl:space-x-128px hidden lg:flex"
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
