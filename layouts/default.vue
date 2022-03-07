<template>
  <div tabindex="0">
    <notification-bar />
    <primary-navbar />
    <Nuxt />
    <footer-container />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FooterContainer from '@/components/app/footer/FooterContainer.vue';
import NotificationBar from '@/components/app/header/NotificationBar.vue';
import PrimaryNavbar from '@/components/app/header/PrimaryNavbar.vue';

export default Vue.extend({
  components: {
    PrimaryNavbar,
    NotificationBar,
    FooterContainer,
  },
});
</script>
