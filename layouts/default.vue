<template>
  <div data-theme="dark" class="bg-base-100">
    <notification-bar />
    <app-navbar />
    <Nuxt />
    <footer-container />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppNavbar from '@/components/layout/AppNavbar.vue';
import FooterContainer from '@/components/app/footer/FooterContainer.vue';
import NotificationBar from '@/components/layout/NotificationBar.vue';

export default Vue.extend({
  components: {
    NotificationBar,
    AppNavbar,
    FooterContainer,
  },
});
</script>
