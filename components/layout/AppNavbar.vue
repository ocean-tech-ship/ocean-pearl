<template>
  <nav
    class="
      shadow
      lg:shadow-none
      bg-secondary
      fixed
      lg:relative
      z-50
      top-0
      w-full
      py-4
      lg:py-16
    "
  >
    <div
      class="
        flex
        items-center
        justify-between
        2sm:px-4
        sm:px-16
        md:px-32
        mx-auto
        max-w-1440
      "
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
        class="
          flex-grow
          items-center
          justify-end
          md:space-x-62px
          lg:space-x-128px
          hidden
          lg:flex
        "
      >
        <NuxtLink to="/projects">{{ $t('navbar.navbarProjects') }}</NuxtLink>

        <NuxtLink to="/dao-proposals">{{ $t('navbar.navbarDao') }}</NuxtLink>

        <nuxt-link
          v-if="!walletAddress"
          to="/management"
        >
          <app-button-style
            class="text-center"
            :text="$t('manage.auth.login.action')"
          />
        </nuxt-link>

        <div v-else class="flex items-center">
          <nuxt-link
            to="/management"
            class="p-2 rounded flex items-center"
            style="background-color: black; color: white;"
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
              <img
                :class="{ 'rotate-180': context.open }"
                class="h-6 w-6 cursor-pointer object-cover"
                src="@/assets/images/icons/dropdown.svg"
                alt="account settings"
                @click="context.toggleOpen()"
              />

              <div
                v-if="context.open"
                class="
                    shadow
                    origin-top-right
                    absolute
                    right-0
                    mt-4
                    w-64
                    bg-grey
                    border border-primary
                    rounded
                    overflow-hidden
                    shadow-md
                  "
              >
                <ul @click="context.toggleOpen()">
                  <li>
                    <nuxt-link to="/management">
                      <button
                        type="button"
                        class="font-bold block px-4 py-1"
                      >
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
import Jazzicon from 'vue-jazzicon';
import { mapState } from 'vuex';
import AppMobileNavbar from '@/components/layout/AppMobileNavbar.vue';
import AppButtonStyle from '@/components/common/AppButtonStyle.vue';
import { SESSION_NAME } from '@/store/auth';
import EthAddress from '@/mixins/EthAddress';
import MainDropdown from '@/components/common/MainDropdown.vue';

export default {
  components: {
    AppMobileNavbar,
    AppButtonStyle,
    Jazzicon,
    MainDropdown,
  },

  mixins: [EthAddress],

  computed: {
    ...mapState('account', {
      accountWallet: 'wallet',
    }),

    walletAddress() {
      return this.accountWallet || this.$cookies.get(SESSION_NAME);
    }
  },
};
</script>

<style>
body {
  padding-top: 120px;

  @media (min-width: 992px) {
    padding-top: 0;
  }
}
</style>
