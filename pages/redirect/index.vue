<template>
  <app-primary-gradient-background class="grid place-items-center h-screen">
    <div
      class="bg-white shadow rounded p-6 w-11/12 md:w-4/5 xl:w-1/3 text-center space-y-3 md:space-y-5"
    >
      <NuxtLink to="/">
        <div class="flex items-center justify-center">
          <img src="@/assets/images/pearl-logo.svg" alt="pearl-logo" />
          <p class="pl-2 text-third">
            {{ $t('navbar.logoText') }}
          </p>
        </div>
      </NuxtLink>

      <div class="flex justify-center">
        <app-icon
          class="text-complementary"
          :size="64"
          :data="icons.exclamationCircle"
        />
      </div>

      <p class="text-primary leading-tight">
        {{ $t('redirect.consent') }}
      </p>

      <p class="break-all text-smbase leading-tight">{{ $route.query.url }}</p>

      <div>
        <a
          :href="decodeURIComponent($route.query.url)"
          rel="noopener noreferrer"
        >
          <app-button
            type="label"
            class="btn-gradient-primary-variant border-0"
          >
            {{ $t('general.continue') }}
          </app-button>
        </a>
      </div>
    </div>
  </app-primary-gradient-background>
</template>

<script>
import exclamationCircle from '@iconify/icons-la/exclamation-circle';
import Vue from 'vue';
import AppPrimaryGradientBackground from '@/components/common/AppPrimaryGradientBackground';
import AppIcon from '@/components/common/AppIcon';
import AppButton from '@/components/common/AppButton';

export default Vue.extend({
  name: 'RedirectConsent',
  components: {
    AppButton,
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
