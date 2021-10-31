<template>
  <div v-if="settingsDropdown && projectTitle && to" class="card">
    <app-settings-dropdown :project-title="projectTitle" :project-link="to" />
    <NuxtLink :prefetch="prefetch" :to="to">
      <div :class="cardClass">
        <slot />
      </div>
    </NuxtLink>
  </div>
  <NuxtLink v-else :prefetch="prefetch" :to="to">
    <div :class="cardClass" class="card">
      <slot />
    </div>
  </NuxtLink>
</template>

<script>
import AppSettingsDropdown from '~/components/common/AppSettingsDropdown';

export default {
  name: 'AppLinkCard',
  components: { AppSettingsDropdown },
  props: {
    settingsDropdown: {
      type: Boolean,
      required: false,
      default: false,
    },
    projectTitle: {
      type: String,
      required: false,
      default: '',
    },
    prefetch: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: true,
      default: '',
    },
    cardClass: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 760px) {
  .card {
    transition: 100ms ease-in-out;
  }
  .card:hover {
    transform: translateY(-6px);
  }
}
</style>
