<template>
  <app-primary-gradient-background class="grid place-items-center h-screen">
    <div
      class="bg-base-200 shadow rounded p-6 w-11/12 md:w-4/5 xl:w-1/3 text-center space-y-3 md:space-y-5"
    >
      <nuxt-link class="btn btn-ghost normal-case text-lg text-primary" to="/">
        <img src="@/assets/images/pearl-logo.svg" alt="pearl-logo" />
        <p class="pl-2 text-third">
          {{ $t('navbar.logoText') }}
        </p>
      </nuxt-link>

      <div class="flex justify-center">
        <app-icon
          class="text-warning"
          :size="64"
          :data="icons.exclamationCircle"
        />
      </div>

      <p class="leading-tight">
        {{ $t('redirect.consent') }}
      </p>

      <p class="break-all text-smbase leading-tight italic">
        {{ $route.query.url }}
      </p>

      <a
        class="w-full btn btn-primary border-0"
        :href="decodeURIComponent($route.query.url)"
        rel="noopener noreferrer"
      >
        {{ $t('general.continue') }}
      </a>
    </div>
  </app-primary-gradient-background>
</template>

<script>
import exclamationCircle from '@iconify/icons-la/exclamation-circle';
import Vue from 'vue';
import AppPrimaryGradientBackground from '@/components/common/AppPrimaryGradientBackground';
import AppIcon from '@/components/common/AppIcon';

export default Vue.extend({
  name: 'RedirectConsent',
  components: {
    AppIcon,
    AppPrimaryGradientBackground,
  },

  beforeRouteEnter(to, from, next) {
    if (!to.query.url) {
      next('/');
    } else {
      next();
    }
  },

  layout: 'plain',

  data() {
    return {
      icons: {
        exclamationCircle,
      },
    };
  },
});
</script>
