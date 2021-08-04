<template>
  <nav>
    <div class="mb-32 md:mb-16">
      <div
        class="
          px-1
          shadow
          md:shadow-none
          mb-12
          2sm:px-4
          sm:px-16
          md:px-32
          bg-secondary
          fixed
          md:relative
          top-0
          mx-auto
          w-full
          md:max-w-1440
          flex
          items-center
          justify-between
          py-4
          md:py-12
        "
      >
        <NuxtLink to="/">
          <div class="flex items-center">
            <img src="@/assets/images/pearl-logo.svg" alt="pearl-logo" />
            <p class="xs:block md:hidden xl:block pl-2 text-primary">
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
            md:flex
          "
        >
          <NuxtLink to="/projects">{{ $t('navbar.navbarProjects') }}</NuxtLink>

          <NuxtLink to="/dao-project-overview">
            {{ $t('navbar.navbarDao') }}
          </NuxtLink>

          <NuxtLink
            v-if="!$store.state.account.wallet"
            to="/manage"
            class="ml-8"
          >
            <app-button-style
              class="text-center"
              :text="$t('manage.auth.login.action')"
              :icon="require('@/assets/images/icons/vote-white.svg')"
            />
          </NuxtLink>

          <div v-else class="ml-8 flex items-center">
            <NuxtLink
              to="/manage"
              class="p-2 rounded flex items-center"
              style="background-color: black; color: white"
            >
              {{ shrinkAddress($store.state.account.wallet) }}
              <div
                class="ml-2"
                v-html="createIcon($store.state.account.wallet, 24)"
              />
            </NuxtLink>

            <main-dropdown>
              <template slot-scope="context">
                <img
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
                      <button
                        type="button"
                        class="font-bold block px-4 py-3"
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
        <div class="md:hidden">
          <button-with-dropdown />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import EthAddress from '@/mixins/EthAddress'
import Identicon from '@/mixins/Identicon'
import ButtonWithDropdown from '@/components/common/ButtonWithDropdown'
import AppButtonStyle from '@/components/common/AppButtonStyle'
import MainDropdown from '@/components/common/MainDropdown'

export default {
  components: {
    ButtonWithDropdown,
    AppButtonStyle,
    MainDropdown,
  },

  mixins: [EthAddress, Identicon],
}
</script>

<style></style>
