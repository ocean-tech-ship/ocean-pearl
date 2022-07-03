<template>
  <nuxt-link class="pl-0 btn btn-ghost normal-case text-lg" to="/">
    <img
      class="pr-2"
      src="@/assets/images/pearl-logo.svg"
      :alt="$t('general.logo')"
    />
    {{ $t('navbar.logoText') }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'LogoBranding',
};
</script>

