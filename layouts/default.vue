<template>
  <div>
    <notification-bar />
    <section-container>
      <primary-navbar />
    </section-container>
    <!--
    <app-navbar />
    -->
    <Nuxt />
    <footer-container />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppNavbar from '@/components/layout/AppNavbar.vue';
import FooterContainer from '@/components/app/footer/FooterContainer.vue';
import NotificationBar from '@/components/layout/NotificationBar.vue';
import PrimaryNavbar from '~/components/layout/PrimaryNavbar.vue';
import SectionContainer from '~/components/common/SectionContainer.vue';

export default Vue.extend({
  components: {
    SectionContainer,
    PrimaryNavbar,
    NotificationBar,
    AppNavbar,
    FooterContainer,
  },
});
</script>
