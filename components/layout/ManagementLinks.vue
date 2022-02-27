<template>
  <ul v-if="wallet">
    <li>
      <nuxt-link to="/management">{{ $t('manage.subtitle') }}</nuxt-link>
    </li>
    <li>
      <button
        type="button"
        class="btn btn-ghost normal-case"
        @click="$store.dispatch('auth/logout')"
      >
        {{ $t('manage.auth.logout.title') }}
      </button>
    </li>
  </ul>
</template>

<script>
import { SESSION_NAME } from '~/store/auth';

export default {
  name: 'ManagementLinks',

  computed: {
    wallet() {
      return (
        this.$store.state.account.wallet ?? this.$cookies.get(SESSION_NAME)
      );
    },
  },
};
</script>
