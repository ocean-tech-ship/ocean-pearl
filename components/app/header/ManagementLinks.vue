<template>
  <ul v-if="wallet">
    <li>
      <button
        type="button"
        class="btn btn-ghost justify-start font-normal normal-case"
        @click="$store.dispatch('auth/logout')"
      >
        {{ $t('manage.auth.logout.title') }}
      </button>
    </li>
  </ul>
</template>

<script>
import ConnectedWallet from '@/mixins/ConnectedWallet';

export default {
  name: 'ManagementLinks',

  mixins: [ConnectedWallet],
};
</script>
