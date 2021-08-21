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
          flex
          items-center
          md:space-x-62px
          lg:space-x-128px
          hidden
          lg:block
        "
      >
        <NuxtLink to="/projects">{{ $t('navbar.navbarProjects') }}</NuxtLink>
        <NuxtLink to="/dao-proposals">{{ $t('navbar.navbarDao') }}</NuxtLink>
        <app-link
          to="https://github.com/oceanprotocol/oceandao/wiki/Grant-Proposal-Template"
        >
          <app-button-style
            class="text-center"
            :icon="require('@/assets/images/icons/vote-white.svg')"
            :text="$t('project.proposal.submit')"
          />
        </app-link>
      </div>
      <div class="lg:hidden">
        <button-with-dropdown />
      </div>
    </div>
  </nav>
</template>

<script>
import ButtonWithDropdown from '@/components/common/ButtonWithDropdown.vue';
import AppButtonStyle from '@/components/common/AppButtonStyle.vue';
import AppLink from '@/components/common/AppLink.vue';

export default {
  components: {
    ButtonWithDropdown,
    AppButtonStyle,
    AppLink,
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
