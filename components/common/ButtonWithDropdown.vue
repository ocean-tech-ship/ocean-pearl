<template>
  <main-dropdown>
    <template slot-scope="context">
      <img
        alt="treasure icon navbar"
        class="h-10 w-10 cursor-pointer object-cover"
        src="@/assets/images/icons/treasure-card.svg"
        @click="context.toggleOpen"
      />
      <div
        v-if="context.open"
        class="
          shadow
          origin-top-right
          absolute
          right-0
          mt-2
          w-64
          bg-grey
          border border-primary
          rounded
          overflow-hidden
          shadow-md
        "
      >
        <ul @click="context.toggleOpen">
          <li>
            <NuxtLink class="font-bold block px-4 py-3" to="/">{{
              $t('navbar.navbarLinkDefault')
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="font-bold block px-4 py-3" to="/projects">{{
              $t('navbar.navbarProjects')
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="font-bold block px-4 py-3"
              to="/dao-project-overview"
              >{{ $t('navbar.navbarDao') }}</NuxtLink
            >
          </li>
          <li v-if="!$store.state.account.wallet">
            <NuxtLink to="/manage">
              <div class="flex px-4 py-3 text-primary">
                <img class="mr-2" src="@/assets/images/icons/vote.svg" alt="" />
                <p>{{ $t('manage.auth.login.action') }}</p>
              </div>
            </NuxtLink>
          </li>
          <li v-if="$store.state.account.wallet">
            <div
              class="rounded p-2 m-4 flex items-center"
              style="background-color: black; color: white"
            >
              {{ shrinkAddress($store.state.account.wallet) }}
              <div
                class="ml-2"
                v-html="createIcon($store.state.account.wallet, 24)"
              />
            </div>
          </li>
          <li v-if="$store.state.account.wallet">
            <div class="flex justify-end">
              <button
                type="button"
                class="font-bold block px-4 py-3"
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
import EthAddress from '@/mixins/EthAddress'
import Identicon from '@/mixins/Identicon'
import MainDropdown from '@/components/common/MainDropdown'

export default {
  name: 'ButtonWithDropdown',

  components: {
    MainDropdown,
  },

  mixins: [EthAddress, Identicon],

  data() {
    return {
      username: 'John Wick',
      email: 'dontkillmydog@johnwick.com',
    }
  },
}
</script>

<style scoped>
li > a:hover {
  background: #bb2c7636;
  transition: 200ms;
}
</style>
