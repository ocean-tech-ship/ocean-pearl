<template>
  <main-dropdown>
    <template slot-scope="context">
      <img
        alt="treasure icon navbar"
        class="h-10 w-10 cursor-pointer object-cover"
        src="@/assets/images/icons/treasure-card.svg"
        @click="toggleDropdown(context)"
      />
      <div
        v-if="context.open"
        class="z-dropdown shadow origin-top-right absolute right-0 mt-2 w-64 bg-grey border border-primary rounded overflow-hidden shadow-md"
      >
        <ul @click="context.toggleOpen">
          <li>
            <NuxtLink class="font-bold block px-4 py-3" to="/">{{
              $t('navbar.navbarLinkDefault')
            }}</NuxtLink>
          </li>
          <li class="font-bold block px-4 py-3">
            <app-link to="/projects" store-name="projects-filter">{{
              $t('navbar.navbarProjects')
            }}</app-link>
          </li>
          <li class="font-bold block px-4 py-3">
            <app-link to="/dao-proposals" store-name="dao-proposals-filter">{{
              $t('navbar.navbarDao')
            }}</app-link>
          </li>
          <li class="font-bold block px-4 py-3">
            <app-link to="/dao-voting" store-name="dao-voting-filter">{{
              $t('leaderboard.meta.title')
            }}</app-link>
          </li>
          <li v-if="!walletAddress">
            <button
              type="button"
              class="flex px-4 py-3 text-primary"
              @click="$store.dispatch('auth/login')"
            >
              {{ $t('manage.auth.login.action') }}
            </button>
          </li>
          <li v-if="walletAddress">
            <NuxtLink to="/management">
              <div
                class="rounded p-2 m-4 flex items-center"
                style="background-color: black; color: white"
              >
                {{ shrinkAddress(walletAddress) }}
                <jazzicon
                  class="flex items-center w-5 h-5 ml-2"
                  :diameter="20"
                  :address="walletAddress"
                />
              </div>
            </NuxtLink>
          </li>
          <li v-if="walletAddress">
            <div class="flex justify-end">
              <nuxt-link to="/management">
                <button type="button" class="font-bold block px-4 py-1">
                  {{ $t('manage.subtitle') }}
                </button>
              </nuxt-link>
            </div>
          </li>
          <li v-if="walletAddress">
            <div class="flex justify-end">
              <button
                type="button"
                class="font-bold block px-4 py-1"
                @click="$store.dispatch('auth/logout')"
              >
                {{ $t('manage.auth.logout.title') }}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </main-dropdown>
</template>

<script>
import { mapState } from 'vuex';
import Jazzicon from 'vue-jazzicon';
import MainDropdown from '@/components/common/MainDropdown.vue';
import { SESSION_NAME } from '@/store/auth';
import EthAddress from '@/mixins/EthAddress';
import AppLink from '@/components/common/AppLink';

export default {
  name: 'AppMobileNavbar',

  components: {
    MainDropdown,
    Jazzicon,
    AppLink,
  },

  mixins: [EthAddress],

  computed: {
    ...mapState('account', {
      accountWallet: 'wallet',
    }),

    walletAddress() {
      return this.accountWallet || this.$cookies.get(SESSION_NAME);
    },
  },

  methods: {
    toggleDropdown(context) {
      this.$store.commit('alert/clear');
      context.toggleOpen();
    },
  },
};
</script>

<style scoped>
li > a:hover {
  background: #bb2c7636;
  transition: 200ms;
}
</style>
