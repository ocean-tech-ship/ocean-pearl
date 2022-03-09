<template>
  <div>
    <notification-bar />
    <primary-navbar />
    <Nuxt />
    <primary-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PrimaryFooter from '@/components/app/footer/PrimaryFooter.vue';
import NotificationBar from '@/components/app/header/NotificationBar.vue';
import PrimaryNavbar from '@/components/app/header/PrimaryNavbar.vue';

export default Vue.extend({
  components: {
    PrimaryNavbar,
    NotificationBar,
    PrimaryFooter,
  },
});
</script>
