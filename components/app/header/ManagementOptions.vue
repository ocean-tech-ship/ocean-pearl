<template>
  <!-- logged-in - visualize connected wallet -->
  <div v-if="wallet" class="block xl:flex items-center">
    <nuxt-link to="/management" class="btn btn-outline bg-base-300">
      {{ shrinkAddress(wallet) }}

      <jazzicon class="pl-2 w-6 h-6" :address="wallet" :diameter="24" />
    </nuxt-link>

    <!-- account options (>= xl) -->
    <div class="hidden xl:block dropdown dropdown-end">
      <label tabindex="0" class="m-1 btn btn-sm btn-circle btn-ghost">
        <app-icon class="w-10 h-120" :data="icons.angleDown" />
      </label>
      <ul
        tabindex="0"
        class="mt-3 p-2 shadow menu dropdown-content bg-base-200 rounded-box w-52 space-y-2"
      >
        <!-- mobile navbar uses 'management-links' in it's definition -->
        <management-links />
      </ul>
    </div>
  </div>

  <!-- call to login -->
  <app-button
    v-else
    class="btn-gradient-primary-variant border-0"
    @click="$store.dispatch('auth/login')"
  >
    {{ $t('manage.auth.login.action') }}
  </app-button>
</template>

<script>
import Jazzicon from 'vue-jazzicon';
import angleDown from '@iconify/icons-la/angle-down';
import { SESSION_NAME } from '@/store/auth';
import EthAddress from '@/mixins/EthAddress';
import AppIcon from '@/components/common/AppIcon';
import ManagementLinks from '@/components/app/header/ManagementLinks';
import AppButton from '~/components/common/AppButton';

export default {
  name: 'ManagementOptions',

  components: { AppButton, ManagementLinks, AppIcon, Jazzicon },

  mixins: [EthAddress],

  data() {
    return {
      icons: {
        angleDown,
      },
    };
  },

  computed: {
    wallet() {
      return (
        this.$store.state.account.wallet ?? this.$cookies.get(SESSION_NAME)
      );
    },
  },
};
</script>
